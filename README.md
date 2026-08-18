# Aashir Saeed — Professional Portfolio

Live site: [https://maashirsaeed.github.io/aashir-portfolio/](https://maashirsaeed.github.io/aashir-portfolio/)

Personal website for Aashir Saeed, Student Recruitment Manager at the University of Portsmouth. This is a personal professional site and is not an official University of Portsmouth website.

## Local development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Updating content

Professional information lives in `src/data/`:

- `profile.js` — name, biography, contact details, portrait path
- `experience.js` — current role and career timeline
- `expertise.js` / `skills.js` — practice areas and skills
- `events.js` — industry engagement gallery
- `impact.js` — qualitative impact cards
- `education.js` — degrees and certifications
- `philosophy.js` — recruitment principles
- `testimonials.js` — leave empty to hide the section; add objects to enable it
- `site.js` — SEO title, description, canonical URL, navigation

After changing the public URL, update `src/data/site.js`, `index.html`, `public/robots.txt` and `public/sitemap.xml`.

## Photographs

Replace `public/assets/aashir-saeed.jpg` with a professional portrait. Keep a 4:5 crop if possible.

For event images, add files to `public/assets/events/` and set `hasPhoto: true` on the matching item in `src/data/events.js`. Until then, the gallery uses editorial placeholders rather than stock photography.

## Contact form

By default the form opens a mail client (`mailto:`). To enable Formspree, copy `.env.example` to `.env` and set `VITE_FORMSPREE_ID`.

## Deploy

Pushing to `main` on [maashirsaeed/aashir-portfolio](https://github.com/maashirsaeed/aashir-portfolio) builds the site with GitHub Actions and publishes it to GitHub Pages.

In the repository, enable Pages once:

**Settings → Pages → Source → GitHub Actions**
