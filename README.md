# Task 1: Accessible Semantic Portfolio

A four-page personal portfolio (Home, About, Projects, Contact) for Yoga Lakshmi Narayanan R, built with plain HTML5, CSS and a little JavaScript. No frameworks, no build step.

## Features
- Semantic tags: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `figure`.
- ARIA: labelled navigation, `aria-current="page"`, `aria-labelledby` on sections, `role="img"` on the SVG, `role="status"` for the form result.
- SEO: unique `<title>`, meta description, viewport, Open Graph tags, SVG favicon, `lang="en"`.
- Skip-to-content link, visible keyboard focus, one `h1` per page.
- Contact form: real `<label>`s, text error messages linked with `aria-describedby`, focus moves to the first invalid field, success message.
- Responsive from 360px up.

## How to run
Open `index.html` in a browser. Or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## How to deploy
**Netlify:** go to app.netlify.com/drop and drag this folder onto the page. You get a public URL.
**Vercel:** push the folder to GitHub, then at vercel.com choose "Add New Project", import the repo, keep the defaults (no framework) and click Deploy.

## Notes and choices
- No `og:image`: Open Graph images need an absolute URL, which only exists after you deploy. Add one after deploying if you want.
- No real photo, so an SVG initial is used. Replace it with your own picture and add meaningful `alt` text.
- The form does not send data (there is no server). It shows a success message only.
- Projects 2 to 5 are listed as in progress. Update the links after deploying them.
- Lighthouse and axe-core could not be run in my sandbox (no internet to install them). See SUBMISSION notes: run Lighthouse in Chrome DevTools yourself.
