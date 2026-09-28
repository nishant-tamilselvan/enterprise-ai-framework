#!/usr/bin/env python3
"""Fail when a tracked file contains a denylisted pattern.

Patterns come from three places, all case-insensitive Python regular expressions:

| Source | Holds | Reported as |
| --- | --- | --- |
| scripts/ci/denylist.txt | Public patterns: credentials, internal hostnames, personal paths | the pattern itself |
| .denylist.local (gitignored) | Organization names, for local and pre-commit runs | "a private pattern" |
| DENYLIST environment variable | The same private patterns in CI, from a repository secret, separated by ";" | "a private pattern" |

Private patterns are never printed, so a CI log cannot reveal the names they protect.

Usage: python scripts/ci/denylist.py [FILE ...]
With no files, every file tracked by git is checked. Exit code 1 means a match.
"""
from __future__ import annotations

import os
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PUBLIC_FILE = ROOT / "scripts/ci/denylist.txt"
LOCAL_FILE = ROOT / ".denylist.local"
SKIP = {"scripts/ci/denylist.txt", ".denylist.local"}


def _read_patterns(path: Path) -> list[str]:
    if not path.is_file():
        return []
    lines = (raw.strip() for raw in path.read_text(encoding="utf-8").splitlines())
    return [line for line in lines if line and not line.startswith("#")]


def load_patterns() -> list[tuple[re.Pattern[str], str | None]]:
    """Return (compiled pattern, label); a label of None marks a private pattern."""
    patterns: list[tuple[re.Pattern[str], str | None]] = [
        (re.compile(entry, re.IGNORECASE), entry) for entry in _read_patterns(PUBLIC_FILE)
    ]
    private = _read_patterns(LOCAL_FILE)
    private += [item.strip() for item in os.environ.get("DENYLIST", "").split(";") if item.strip()]
    patterns += [(re.compile(entry, re.IGNORECASE), None) for entry in private]
    return patterns


def tracked_files() -> list[str]:
    output = subprocess.run(
        ["git", "ls-files", "-z"], cwd=ROOT, capture_output=True, check=True
    ).stdout.decode("utf-8")
    return [name for name in output.split("\0") if name]


def main(argv: list[str]) -> int:
    patterns = load_patterns()
    files = argv or tracked_files()
    findings = 0
    for name in files:
        rel = Path(name).resolve().relative_to(ROOT).as_posix() if Path(name).is_absolute() else Path(name).as_posix()
        if rel in SKIP:
            continue
        path = ROOT / rel
        try:
            text = path.read_text(encoding="utf-8")
        except (UnicodeDecodeError, FileNotFoundError, IsADirectoryError):
            continue  # binary, deleted or not a regular file
        for number, line in enumerate(text.splitlines(), 1):
            for pattern, label in patterns:
                if pattern.search(line):
                    what = f"pattern {label!r}" if label else "a private pattern"
                    print(f"{rel}:{number}: matches {what}")
                    findings += 1
    if not findings:
        print(f"denylist: ok ({len(files)} files, {len(patterns)} patterns)")
    return 1 if findings else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
