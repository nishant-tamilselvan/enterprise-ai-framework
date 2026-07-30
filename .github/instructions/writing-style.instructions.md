---
description: "Use when writing or editing any prose: documentation, README files, blog posts, release notes, whitepapers, commit messages, or PR descriptions. Enforces the plain declarative writing style and strips common AI writing tells."
name: "Writing Style Guide"
applyTo: "**/*.md"
---

# Writing Style Guide

Apply these rules to all written deliverables. If a sentence fails any rule, rewrite it.

## Core Principle

Write in plain declarative language. Make a claim. Move on. Trust the reader to follow without rhetorical scaffolding. If a sentence works only because of its rhythm, its symmetry, or the way it sounds when read aloud, replace it with one that works because of what it says.

## Hard Rules

1. **No "this is not A, but B" constructions.** This is the highest priority rule and the most reliable signal of AI-generated prose. Forbidden forms include "This is not X. It is Y.", "Not just X, but Y.", "Not only X, but also Y.", "X is not the goal. Y is.", and "X is not a nice to have, it is a requirement." State what the thing is and drop the negated half. If a contrast genuinely matters, give each side a complete sentence that carries real information.

2. **No em dashes or long dashes.** Use commas, periods, parentheses, or colons. If a sentence relies on an em dash, it is usually two sentences trying to be one. Split them.

3. **No rhetorical tetracolons or parallel "is the X" listings.** Four-part parallel structures sound polished and say little. Write the content as ordinary sentences. Use a list only when the items are genuinely comparable.

4. **No cinematic short-sentence flourishes.** Two or three short declarative sentences in a row for dramatic effect read like a movie trailer. Combine them into a single sentence with normal cadence.

5. **No "is the moment" or "is where" rhetorical anchors.** Describe what the step delivers instead. "Step four delivers the first global feature placement" rather than "This is the moment it becomes globally visible."

6. **Banned vocabulary.** Strike these on sight and use a plainer word.
   - Verbs and adjectives: leverage (as a verb), unlock, navigate (as a metaphor), delve, robust, seamless, crucial, essential, vital, holistic, nuanced (as filler), intricate, comprehensive (as filler), significant (as filler), interlocking, mutually reinforcing, compound (as a verb of effect), crystallize, amplify (when meaning "help"), tee up.
   - Nouns: landscape (metaphorical), ecosystem (outside biology), tapestry, realm, paradigm, synergy, journey (metaphorical), fabric (metaphorical).
   - Adjective clichés: game-changing, cutting-edge, state-of-the-art, world-class, best-in-class, next-generation.
   - Sentence openers: Moreover, Furthermore, In essence, At its core, Fundamentally, In today's world, In the world of, It's worth noting that, It is important to note that.
   - Phrases to delete: "It is also worth noting", "Not just X, but Y", "From X to Y", "In a world where", "At the end of the day", "Move the needle", "Drive impact".

7. **No three-item lists used as rhetorical flourish.** If three items genuinely apply, list them. If a third is invented to complete the rhythm, use two.

8. **No participial sentence-end flourishes.** Avoid sentences that close with a comma plus a participle phrase summarizing what came before. End the sentence at the period. If the trailing clause adds real information, write it as its own sentence.

9. **No "ensure" when "make" or a direct verb works.** "Ensure the story anchors on the whitepaper" becomes "Anchor the story on the whitepaper."

10. **No vague intensifiers.** Strike very, really, truly, deeply, profoundly, incredibly, extremely, particularly (as filler), notably, importantly. If a claim needs an intensifier to land, strengthen the claim.

11. **No decorations.** Do not include emojis, unrequested icons, or unnecessary decorators in documentation, code, README files, or any user interface unless the user asks for them.

12. **Avoid AI smell.** Keep documentation clear, legible, and DRY. Speak completely on a topic without unnecessary verbosity, and drop sycophantic or overly complimentary phrasing.

## Voice and Cadence

- Default to medium sentence length. Mix short and long, and avoid long runs of sentences of the same length.
- Use the active voice. "The team releases the whitepaper" rather than "The whitepaper is released by the team."
- Name the actor. Avoid agentless constructions where it matters who does the thing.
- Use specific nouns and verbs. "Two contractor roles moved to the platform team" rather than "significant resources redirected toward the initiative."
- Keep numbers concrete. Use them when they are real, round when rounding is honest, and never use numbers as decoration.
- Trust the reader. Do not over-explain implications, foreshadow ("As we will see below"), or recap ("As noted above").

## Structure

- Headings describe content, not importance. "The Asks" rather than "Critical Strategic Asks."
- Bullets are for genuine lists: comparable items in parallel grammatical form. If the items are not a list, use prose.
- One idea per paragraph. Open with the claim, support it, stop.
- End sections at the period. Do not add a closing flourish that summarizes the section.

## Reviewer's Checklist

Run this before submitting any draft. Rewrite any sentence that fails.

1. Does any sentence use "not X, but Y" or "this is not A, it is B"? Strike it.
2. Does any sentence end with a comma and a participle phrase? Strike the trailing phrase.
3. Are there three or more short sentences in a row used for rhythm? Combine them.
4. Does the paragraph contain any banned word? Replace it.
5. Is there a tetracolon or four-part parallel listing for effect? Convert to ordinary prose.
6. Is "ensure" used where a direct verb would work? Replace it.
7. Is there an em dash? Replace with a comma, period, or parenthesis.
8. Does any sentence open with Moreover, Furthermore, In essence, or At its core? Cut the opener.
9. Does the closing sentence of a section restate what was just said? Cut it.
10. Are there intensifiers (very, deeply, truly, particularly)? Strike unless they carry real meaning.

## Quick Test

Read the draft aloud. If a sentence sounds like a movie trailer, a TED talk opening, or a LinkedIn post, rewrite it. The target voice is a competent senior official briefing a peer: direct, specific, declarative, unhurried.
