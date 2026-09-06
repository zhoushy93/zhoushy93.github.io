# Near-original-style academic homepage (static)

This is a fresh static implementation inspired by the public visual structure of `https://liaohr9.github.io/`.
It is not presented as the original site's source code.

## The one file you should edit

Open `assets/content.js` and change:
- name / Chinese name
- avatar path
- email / GitHub / WeChat
- introduction
- news
- publications + paper/project/code links
- projects
- blog posts
- life albums
- education / research experience / tools

The layout, typography, responsive behavior, dark theme and search are already implemented.

## Avatar and paper images

Replace `assets/avatar-placeholder.svg` with your own photo, then set `person.avatar` in `assets/content.js`.

Replace `paper-1.svg` ... `paper-4.svg` with your own PNG/JPG/WebP teaser images and update the `image` fields in `content.js`.

## GitHub Pages

1. Create a repository named `<your-username>.github.io`.
2. Upload this folder's contents to the repository root.
3. GitHub → Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
4. Open `https://<your-username>.github.io/`.

No build step is required.
