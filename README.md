# recm0708.github.io

Personal website, professional portfolio and bilingual CV hub for **Rubén Enrique Cañizares Miranda**.

The root site is intentionally designed as a first-person personal portfolio rather than a résumé landing page. It introduces Rubén, his current path in Computer Networks, his Electrical Systems & Automation background, technical focus areas, public GitHub projects and professional contact channels.

A separate `/cv/` hub contains three specialized web CV experiences. Each profile has its own visual language and content hierarchy instead of reusing one template with different colors.

## Current status

**Active development — all three bilingual web CV profiles are now available.**

Available now:

- First-person bilingual personal homepage
- Network / infrastructure visual identity with inline SVG iconography
- GitHub profile portrait integration
- About, technical areas, public projects and contact sections
- Dedicated Curriculum Vitae hub
- Electrical Systems & Automation CV — Spanish / English
- Computer Networks & Infrastructure CV — Spanish / English
- General / Multidisciplinary CV — Spanish / English
- Responsive layouts
- Light/dark appearance
- Print / Save as PDF presentation for CV pages
- Accessibility baseline
- Custom 404 page
- SEO essentials, robots policy and sitemap

The web CVs are intentionally broader than ATS documents. They may include technical projects, labs, tools, context, infrastructure, credentials and complementary experience that would not reasonably fit in a concise ATS résumé. ATS PDFs will be maintained separately when added to the site.

## Architecture

```text
/
├── index.html                 # Personal website / portfolio
├── cv/
│   └── index.html             # Curriculum Vitae profile selector
├── es/
│   ├── electrica/
│   │   └── index.html
│   ├── redes/
│   │   └── index.html
│   └── general/
│       └── index.html
├── en/
│   ├── electrical/
│   │   └── index.html
│   ├── networks/
│   │   └── index.html
│   └── general/
│       └── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── .nojekyll
└── assets/
    ├── css/
    │   ├── home.css
    │   ├── cv-hub.css
    │   ├── electrical.css
    │   ├── networks.css
    │   ├── general-cv.css
    │   └── global.css
    ├── js/
    │   ├── home.js
    │   ├── cv-hub.js
    │   ├── cv.js
    │   └── main.js
    ├── images/
    └── documents/
```

## Design strategy

The site deliberately avoids using one UI system for every page.

- **Personal homepage:** networking / infrastructure identity, first-person narrative, topology graphics and an evolving project portfolio.
- **CV hub:** neutral editorial selector that routes visitors to the appropriate professional profile.
- **Electrical CV:** electrical / energy / control identity focused on installations, maintenance, low voltage and automation.
- **Networks CV:** networking / systems identity built around topology, CLI, routing, switching, infrastructure, SDN and observability.
- **General CV:** editorial multidisciplinary dossier combining electrical, technology, support and infrastructure experience.

Shared behavior such as language preference, appearance and print support is reused where appropriate without forcing the same visual composition across sections.

## Current CV URLs

### Electrical Systems & Automation

- ES: <https://recm0708.github.io/es/electrica/>
- EN: <https://recm0708.github.io/en/electrical/>

### Computer Networks & Infrastructure

- ES: <https://recm0708.github.io/es/redes/>
- EN: <https://recm0708.github.io/en/networks/>

### General / Multidisciplinary Profile

- ES: <https://recm0708.github.io/es/general/>
- EN: <https://recm0708.github.io/en/general/>

## Technology

- Semantic HTML5
- Modern CSS3
- Inline SVG iconography
- Vanilla JavaScript
- Responsive layouts
- Light/dark theme support
- Spanish/English experience
- Print-optimized CV layouts
- GitHub Pages
- No runtime framework or third-party UI dependency

## Publishing model

GitHub Pages deploys directly from the `main` branch at the repository root.

- Personal site: <https://recm0708.github.io/>
- Curriculum Vitae hub: <https://recm0708.github.io/cv/>

## Planned next

- Expand the Electrical web CV beyond its initial ATS-oriented structure so it matches the richer web-content policy used by Networks and General
- Add a dedicated credentials / certificates section
- Publish approved certificate and diploma PDFs
- Add ATS résumé PDFs as separate downloadable documents
- Replace the GitHub avatar with an approved local professional portrait
- Add richer project pages as public repositories become presentation-ready
- Add final Open Graph / social preview artwork and favicon assets

## Privacy and document policy

This repository is public. Only professional information intentionally approved for public distribution should be committed. Sensitive identification documents, private records, confidential employer information and unnecessary personal data must not be published.

PDF files are reserved for approved professional documents such as ATS résumés, certificates, diplomas, licenses and supporting credentials when their public publication is appropriate.

## Maintenance

The site remains static to minimize dependencies, simplify long-term maintenance and preserve fast loading across desktop and mobile devices.
