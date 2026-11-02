# Reggiws - Homepage

This personal site is built with [Quartz 5](https://quartz.jzhao.xyz/) and published on [GitHub Pages](https://reggiws.github.io/).

## Update the site

- Edit all visible homepage content in `content/index.md`.
- The Research, Internships, and Projects sections are ready for details.
- Change the title, colors, and features in `quartz.config.yaml`.

## Preview locally

You need Node.js 22 or newer and npm 10.9.2 or newer.

```sh
npm ci
npx quartz plugin install
npx quartz build --serve
```

Open `http://localhost:8080` in a browser.

## Publish

GitHub Pages uses the workflow in `.github/workflows/deploy.yml`. Every push to the `v5` branch builds and publishes the site.

The Research, Internships, and Projects sections contain placeholders.

Quartz is licensed under MIT; see `LICENSE.txt`.
