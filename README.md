# Sitio profesional en GitHub Pages — Rubén Cañizares

Repositorio fuente del sitio web personal y profesional de **Rubén Enrique Cañizares Miranda**, publicado mediante **GitHub Pages**.

**Sitio público:** https://recm0708.github.io/

## Propósito del repositorio

Este repositorio existe para mantener y publicar el sitio web. Su función principal es concentrar:

- el código fuente de las páginas públicas;
- los estilos, scripts, iconos y demás recursos visuales;
- las rutas en español e inglés de los perfiles profesionales;
- los archivos necesarios para publicación, indexación y compatibilidad web;
- la configuración y documentación técnica mínima necesaria para mantener el sitio.

El contenido biográfico, profesional y narrativo se presenta directamente en el sitio publicado. El README se limita a documentar el repositorio y su funcionamiento.

## Arquitectura de publicación

El repositorio corresponde a un **GitHub User Site**, por lo que la rama principal se publica en:

`https://recm0708.github.io/`

El sitio es estático y no requiere proceso de compilación, framework de aplicación ni backend.

### Tecnologías principales

- HTML5
- CSS3
- JavaScript
- SVG
- Font Awesome
- GitHub Pages

## Estructura principal

```text
/
├── index.html
├── 404.html
├── cv/
│   ├── index.html
│   ├── es/
│   │   ├── redes/
│   │   ├── electrica/
│   │   └── integral/
│   └── en/
│       ├── networks/
│       ├── electrical/
│       └── comprehensive/
├── legal/
│   ├── index.html
│   ├── es/
│   │   ├── terminos/
│   │   └── privacidad/
│   └── en/
│       ├── terms/
│       └── privacy/
├── assets/
│   ├── css/
│   │   ├── site.css
│   │   └── cv.css
│   ├── icons/
│   │   ├── favicon.svg
│   │   ├── profile-icons.svg
│   │   └── project-icons.svg
│   └── js/
│       └── site.js
├── robots.txt
├── sitemap.xml
└── site.webmanifest
```

## Rutas principales

| Contenido | Español | English |
| --- | --- | --- |
| Sitio principal | `/` | `/` |
| Selector de perfiles | `/cv/` | `/cv/` |
| Redes Informáticas e Infraestructura | `/cv/es/redes/` | `/cv/en/networks/` |
| Sistemas Eléctricos y Automatización | `/cv/es/electrica/` | `/cv/en/electrical/` |
| Perfil Profesional Integral | `/cv/es/integral/` | `/cv/en/comprehensive/` |
| Información legal | `/legal/es/terminos/` y `/legal/es/privacidad/` | `/legal/en/terms/` y `/legal/en/privacy/` |

## Características técnicas

El sitio mantiene, entre otras, las siguientes capacidades:

- diseño responsive;
- modo claro y oscuro;
- contenido bilingüe ES/EN;
- navegación y estados de foco accesibles;
- iconografía SVG propia para perfiles y proyectos;
- página 404 personalizada;
- `sitemap.xml` y `robots.txt`;
- favicon y `site.webmanifest`;
- metadata SEO, canonical y Open Graph en las rutas públicas correspondientes;
- aviso de primera visita, términos de uso y política de privacidad/almacenamiento;
- medidas de disuasión contra copia e impresión de contenido.

## Mantenimiento

La rama de publicación es `main`.

Los cambios del sitio se controlan mediante Git y las tareas de evolución, revisión y cierre se documentan mediante GitHub Issues. Los recursos CSS y JavaScript pueden utilizar parámetros de versión en sus URLs para invalidar caché cuando se realizan cambios relevantes.

Antes de considerar una versión terminada se revisan, según corresponda:

- contenido y equivalencia ES/EN;
- enlaces y rutas;
- accesibilidad básica;
- comportamiento responsive;
- temas claro/oscuro;
- metadata y archivos de indexación;
- recursos visuales;
- publicación final en GitHub Pages.

## Contenido público y privacidad

Este repositorio contiene únicamente material destinado a exposición pública.

Documentos originales, certificados sin sanear, fotografías fuente y otros archivos con información personal o sensible no deben almacenarse aquí. Cuando sea necesario publicar evidencia documental, se utilizarán copias revisadas y apropiadas para acceso público.

## Licencia y derechos de autor

© 2026 Rubén Enrique Cañizares Miranda. Todos los derechos reservados.

El código, diseño, textos y demás materiales originales están sujetos a los términos definidos en [LICENSE](LICENSE).
