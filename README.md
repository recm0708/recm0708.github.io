# recm0708.github.io

Personal website and professional portfolio for **Rubén Enrique Cañizares Miranda**.

The root site is intentionally designed as a first-person personal portfolio rather than a résumé landing page. It introduces Rubén, his current path in Computer Networks, his Electrical Systems & Automation background, technical focus areas, public GitHub projects and professional contact channels.

A separate `/cv/` hub contains the specialized résumé experience.

## Current status

**Active development.**

Available now:

- First-person bilingual personal homepage
- Network / infrastructure visual identity with inline SVG iconography
- GitHub profile portrait integration
- About, technical areas, public projects and contact sections
- Dedicated Curriculum Vitae hub
- Electrical Systems & Automation résumé — Spanish
- Electrical Systems & Automation résumé — English
- Responsive layouts
- Light/dark appearance
- Print / Save as PDF presentation for résumé pages
- Accessibility baseline
- Custom 404 page
- SEO essentials, robots policy and sitemap

Planned next:

- Computer Networks résumé — Spanish / English, with a visual system distinct from Electrical
- General multidisciplinary résumé — Spanish / English, with its own neutral professional visual system
- Professional credentials section
- Approved certificate and diploma PDFs
- More public GitHub projects as repositories become ready for presentation
- Dedicated professional portrait stored as a local site asset
- Final social preview assets

## Architecture

```text
/
├── index.html                 # personal website / portfolio
├── cv/
│   └── index.html             # Curriculum Vitae profile selector
├── es/
│   └── electrica/
│       └── index.html
├── en/
│   └── electrical/
│       └── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── .nojekyll
└── assets/
    ├── css/
    │   ├── home.css
    │   ├── cv-hub.css
    │   ├── global.css
    │   └── electrical.css
    ├── js/
    │   ├── home.js
    │   ├── cv-hub.js
    │   ├── main.js
    │   └── cv.js
    ├── images/
    └── documents/
```

## Design strategy

The site does **not** use one visual template for every page.

- **Personal homepage:** network / infrastructure / engineering identity with editorial layout, topology graphics and first-person narrative.
- **CV hub:** neutral editorial index that routes visitors to the appropriate professional résumé.
- **Electrical CV:** electrical / energy / control identity.
- **Networks CV:** will use a networking / systems visual identity independent from the Electrical page.
- **General CV:** will use a distinct multidisciplinary professional identity.

Shared behavior such as language preference and appearance is persisted without forcing the same visual composition across sections.

## Technology

- Semantic HTML5
- Modern CSS3
- Inline SVG iconography
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

Curriculum Vitae hub: <https://recm0708.github.io/cv/>

Electrical résumé:

- ES: <https://recm0708.github.io/es/electrica/>
- EN: <https://recm0708.github.io/en/electrical/>

## Privacy and document policy

This repository is public. Only professional information intentionally approved for public distribution should be committed. Sensitive identification documents, private records, confidential employer information and unnecessary personal data must not be published.

PDF files are reserved primarily for professional credentials and supporting documents when their public publication is appropriate.

## Maintenance

The site remains static to minimize dependencies, simplify long-term maintenance and preserve fast loading across desktop and mobile devices.
