Roy Doan — Personal Profile / Resume

Project: Static portfolio/profile site built with plain HTML, CSS and a small JavaScript file.

Files: top-level files `main.html`, `main.css`, `main.js`, and the `img/` folder for images.

Purpose:

A responsive personal profile/resume page showcasing About, Education, Experience, Skills, Projects, and a small interactive Quiz + Contact section.
Focus on a clean white + cyan/blue visual theme, accessible navigation, and a hero section with profile photo.

Key features

- Responsive hero (left text / right profile photo) and mobile-friendly layout.
- Sticky top navigation with a hamburger menu for small screens.
- Small interactive quiz that updates results on click.

Files of interest

- main.html — page structure and content.
- main.css — site styles and responsive rules.
- main.js — small JS for mobile nav toggle and quiz behavior.
- img — folder containing background and profile images (e.g. background2.avif, profile image). Ensure images are present and file names match those referenced in main.html.

Deployment
The site will be available at:
`https://roysdoan.github.io/`

Accessibility notes

- Headings were audited and adjusted to avoid skipped levels (e.g., `h2` → `h3` fixes for the quiz section) — I run WAVE to check for accesibility
- Verify contrast on hero text against the background image; CSS includes an overlay and text-shadow rules to improve legibility.

Known issues / checklist

- Hard to find a good hamburger tutorial
- Having idea about how to use javascript to be useful

External resources / credits

- Font Awesome CDN used for decorative icon(s): referenced in main.html (CDN link).
- Using github to launch
- https://www.youtube.com/watch?v=dAIVbLrAb_U, hamburger tutorial
