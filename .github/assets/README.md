# Repository assets

These files serve the GitHub repository page, not the documentation site. The site's own images live in `docs/assets/`.

| File | Use | Source |
| --- | --- | --- |
| `banner.svg` | Banner at the top of the README | Hand-written SVG, editable directly |
| `social-preview.png` | Link preview image (1280 × 640) for the repository | Rendered from `social-preview.html` |
| `social-preview.html` | Editable source of the social preview | Open in a browser at 1280 × 640 and take a screenshot |
| `icons/*.svg` | Section icons in the README | [Material Design Icons](https://pictogrammers.com/library/mdi/), recolored |

## Updating the social preview

GitHub has no API for the social preview image. After you change it:

1. Render `social-preview.html` at 1280 × 640 and save it as `social-preview.png`.
2. Open the repository **Settings**, then **General**, then **Social preview**, and upload the PNG.

## Licenses

The banner, the social preview, and their sources are licensed under CC BY 4.0, like the rest of the content. The icons come from Material Design Icons by Pictogrammers, licensed under the [Apache License 2.0](https://github.com/Templarian/MaterialDesign/blob/master/LICENSE).
