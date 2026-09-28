// Mermaid diagrams with an expandable, zoomable viewer.
//
// Material for MkDocs renders Mermaid inside a closed shadow DOM, which no lightbox or
// zoom script can reach. The superfences config in mkdocs.yml therefore emits
// <pre class="eaf-diagram"> blocks, which Material ignores, and this module renders them
// into the normal DOM. Each diagram gets an Expand button that opens a full-screen viewer:
// the mouse wheel, a pinch, or the + and - buttons zoom, dragging pans, 0 fits, and Esc closes.

import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11.17.2/dist/mermaid.esm.min.mjs";

const SOURCE_SELECTOR = "pre.eaf-diagram";
let counter = 0;

const icons = {
  expand: '<path d="M10 21v-2H6.41l4.5-4.5-1.41-1.41-4.5 4.5V14H3v7h7m4.5-10.09 4.5-4.5V10h2V3h-7v2h3.59l-4.5 4.5 1.41 1.41Z"/>',
  zoomIn: '<path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5m-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14m.5-7H9v2H7v1h2v2h1v-2h2V9h-2V7Z"/>',
  zoomOut: '<path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5m-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14M7 9h5v1H7V9Z"/>',
  fit: '<path d="M5 15H3v4a2 2 0 0 0 2 2h4v-2H5v-4M5 5h4V3H5a2 2 0 0 0-2 2v4h2V5m14-2h-4v2h4v4h2V5a2 2 0 0 0-2-2m0 16h-4v2h4a2 2 0 0 0 2-2v-4h-2v4M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z"/>',
  close: '<path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"/>',
};

function icon(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;
}

function button(name, label) {
  return `<button type="button" class="eaf-diagram__button" data-action="${name}" title="${label}" aria-label="${label}">${icon(name)}</button>`;
}

function isDark() {
  return document.body.getAttribute("data-md-color-scheme") === "slate";
}

function configure() {
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict",
    theme: isDark() ? "dark" : "default",
    fontFamily: getComputedStyle(document.body).getPropertyValue("--md-text-font-family") || "sans-serif",
    flowchart: { htmlLabels: true, curve: "basis" },
  });
}

// Turn each source block into a figure that keeps its source for later re-renders.
function collect() {
  for (const pre of document.querySelectorAll(SOURCE_SELECTOR)) {
    const figure = document.createElement("figure");
    figure.className = "eaf-diagram";
    figure.dataset.source = pre.textContent;
    figure.innerHTML =
      `<div class="eaf-diagram__toolbar">${button("expand", "Expand diagram")}</div>` +
      '<div class="eaf-diagram__canvas" role="img"></div>';
    pre.replaceWith(figure);
  }
  return document.querySelectorAll("figure.eaf-diagram");
}

async function render(figures) {
  configure();
  for (const figure of figures) {
    const canvas = figure.querySelector(".eaf-diagram__canvas");
    try {
      const { svg } = await mermaid.render(`eaf-diagram-${++counter}`, figure.dataset.source);
      canvas.innerHTML = svg;
      canvas.setAttribute("aria-label", "Diagram. Select it or use the Expand button to zoom.");
    } catch (error) {
      canvas.textContent = "This diagram could not be rendered.";
      console.error(error);
    }
  }
}

// ---------------------------------------------------------------------------------------
// Full-screen viewer
// ---------------------------------------------------------------------------------------

const viewer = {
  dialog: null,
  stage: null,
  content: null,
  scale: 1,
  x: 0,
  y: 0,
};

function buildViewer() {
  const dialog = document.createElement("dialog");
  dialog.className = "eaf-viewer";
  dialog.setAttribute("aria-label", "Diagram viewer");
  dialog.innerHTML =
    '<div class="eaf-viewer__toolbar">' +
    button("zoomIn", "Zoom in (+)") +
    button("zoomOut", "Zoom out (-)") +
    button("fit", "Fit to screen (0)") +
    button("close", "Close (Esc)") +
    "</div>" +
    '<div class="eaf-viewer__stage"><div class="eaf-viewer__content"></div></div>' +
    '<p class="eaf-viewer__hint">Scroll, pinch, or use the buttons to zoom. Drag to move.</p>';
  document.body.appendChild(dialog);
  viewer.dialog = dialog;
  viewer.stage = dialog.querySelector(".eaf-viewer__stage");
  viewer.content = dialog.querySelector(".eaf-viewer__content");

  dialog.addEventListener("click", (event) => {
    const action = event.target.closest("[data-action]")?.dataset.action;
    if (action === "zoomIn") zoomBy(1.25);
    if (action === "zoomOut") zoomBy(0.8);
    if (action === "fit") fit();
    if (action === "close") dialog.close();
  });

  dialog.addEventListener("keydown", (event) => {
    if (event.key === "+" || event.key === "=") zoomBy(1.25);
    if (event.key === "-") zoomBy(0.8);
    if (event.key === "0") fit();
  });

  viewer.stage.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      const rect = viewer.stage.getBoundingClientRect();
      zoomBy(event.deltaY < 0 ? 1.15 : 1 / 1.15, event.clientX - rect.left, event.clientY - rect.top);
    },
    { passive: false },
  );

  // One pointer drags. Two pointers (a pinch on a touch screen) zoom around their midpoint.
  const pointers = new Map();
  let drag = null;
  let pinch = null;

  viewer.stage.addEventListener("pointerdown", (event) => {
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    try {
      viewer.stage.setPointerCapture(event.pointerId);
    } catch {
      // Capture is an enhancement; dragging still works without it.
    }
    if (pointers.size === 1) {
      drag = { x: event.clientX - viewer.x, y: event.clientY - viewer.y };
      viewer.stage.classList.add("is-dragging");
    } else if (pointers.size === 2) {
      drag = null;
      pinch = { distance: spread(pointers) };
    }
  });

  viewer.stage.addEventListener("pointermove", (event) => {
    if (!pointers.has(event.pointerId)) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pinch && pointers.size === 2) {
      const distance = spread(pointers);
      const rect = viewer.stage.getBoundingClientRect();
      const [a, b] = [...pointers.values()];
      zoomBy(distance / pinch.distance, (a.x + b.x) / 2 - rect.left, (a.y + b.y) / 2 - rect.top);
      pinch.distance = distance;
    } else if (drag) {
      viewer.x = event.clientX - drag.x;
      viewer.y = event.clientY - drag.y;
      apply();
    }
  });

  const release = (event) => {
    pointers.delete(event.pointerId);
    if (pointers.size < 2) pinch = null;
    if (pointers.size === 0) {
      drag = null;
      viewer.stage.classList.remove("is-dragging");
    }
  };
  viewer.stage.addEventListener("pointerup", release);
  viewer.stage.addEventListener("pointercancel", release);
}

function spread(pointers) {
  const [a, b] = [...pointers.values()];
  return Math.hypot(a.x - b.x, a.y - b.y) || 1;
}

function apply() {
  viewer.content.style.transform = `translate(${viewer.x}px, ${viewer.y}px) scale(${viewer.scale})`;
}

function zoomBy(factor, originX, originY) {
  const rect = viewer.stage.getBoundingClientRect();
  const ox = originX ?? rect.width / 2;
  const oy = originY ?? rect.height / 2;
  const next = Math.min(8, Math.max(0.2, viewer.scale * factor));
  const ratio = next / viewer.scale;
  viewer.x = ox - (ox - viewer.x) * ratio;
  viewer.y = oy - (oy - viewer.y) * ratio;
  viewer.scale = next;
  apply();
}

function fit() {
  const svg = viewer.content.querySelector("svg");
  if (!svg) return;
  const stage = viewer.stage.getBoundingClientRect();
  const box = svg.viewBox.baseVal;
  const width = box && box.width ? box.width : svg.getBoundingClientRect().width;
  const height = box && box.height ? box.height : svg.getBoundingClientRect().height;
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.style.maxWidth = "none";
  viewer.scale = Math.min((stage.width * 0.94) / width, (stage.height * 0.94) / height, 4);
  viewer.x = (stage.width - width * viewer.scale) / 2;
  viewer.y = (stage.height - height * viewer.scale) / 2;
  apply();
}

function open(figure) {
  if (!viewer.dialog) buildViewer();
  const svg = figure.querySelector(".eaf-diagram__canvas svg");
  if (!svg) return;
  viewer.content.innerHTML = "";
  viewer.content.appendChild(svg.cloneNode(true));
  viewer.dialog.classList.toggle("is-dark", isDark());
  viewer.dialog.showModal();
  requestAnimationFrame(fit);
}

// The Expand button and a click anywhere on the diagram both open the viewer, the same
// way images open in the lightbox.
document.addEventListener("click", (event) => {
  const trigger = event.target.closest(".eaf-diagram [data-action='expand'], .eaf-diagram__canvas");
  if (trigger) open(trigger.closest("figure.eaf-diagram"));
});

// Re-render when the reader switches between light and dark mode.
new MutationObserver(() => render(document.querySelectorAll("figure.eaf-diagram"))).observe(document.body, {
  attributes: true,
  attributeFilter: ["data-md-color-scheme"],
});

// Material's instant navigation swaps page content without a reload and announces each
// new page on document$. Fall back to a single render when it is not available.
const run = () => render(collect());
if (window.document$) {
  window.document$.subscribe(run);
} else {
  run();
}
