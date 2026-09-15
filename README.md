# recm0708.github.io

Professional portfolio and bilingual CV website for **Rubén Enrique Cañizares Miranda**.

The site is designed as a single professional portal with specialized profiles for:

- Electrical Systems & Automation
- Computer Networks & IT Infrastructure
- General / Multidisciplinary Profile
- Professional credentials and supporting documents

## Current status

**Active development.**

Available now:

- Bilingual professional landing page
- Electrical Systems & Automation résumé — Spanish
- Electrical Systems & Automation résumé — English
- Responsive design system
- Light/dark appearance
- Print / Save as PDF presentation
- Accessibility baseline
- Custom 404 page
- SEO essentials, robots policy and sitemap

Planned next:

- Computer Networks résumé — Spanish / English
- General multidisciplinary résumé — Spanish / English
- Professional credentials section
- Approved certificate and diploma PDFs
- Final social preview assets and professional imagery

## Architecture

```text
/
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── .nojekyll
├── es/
│   └── electrica/
│       └── index.html
├── en/
│   └── electrical/
│       └── index.html
└── assets/
    ├── css/
    │   ├── global.css
    │   └── electrical.css
    ├── js/
    │   ├── main.js
    │   └── cv.js
    ├── images/      # added as professional assets are approved
    └── documents/   # certificates/diplomas only when approved for publication
```

## Technology

- Semantic HTML5
- Modern CSS3
- Vanilla JavaScript
- Responsive layouts
- Light/dark theme support
- Spanish/English experience
- Print-optimized résumé layout
- GitHub Pages
- No runtime framework or third-party UI dependency

## Publishing model

GitHub Pages deploys directly from the `main` branch at the repository root.

Live site: <https://recm0708.github.io/>

Electrical résumé:

- ES: <https://recm0708.github.io/es/electrica/>
- EN: <https://recm0708.github.io/en/electrical/>

## Privacy and document policy

This repository is public. Only professional information intentionally approved for public distribution should be committed. Sensitive identification documents, private records, confidential employer information and unnecessary personal data must not be published.

PDF files are reserved primarily for professional credentials and supporting documents when their public publication is appropriate.

## Maintenance

The portal is maintained as a static site to minimize dependencies, simplify long-term maintenance and preserve fast loading across desktop and mobile devices.
