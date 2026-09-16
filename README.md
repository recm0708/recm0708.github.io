# Blog personal y portafolio profesional de Rubén Cañizares

Repositorio del sitio personal y portafolio profesional de **Rubén Enrique Cañizares Miranda**, publicado mediante GitHub Pages.

**Sitio:** https://recm0708.github.io/

## Propósito

El sitio funciona como un blog personal y profesional. Reúne mi historia, trayectoria, metas, proyectos, intereses, voluntariado, perfiles públicos y tres versiones de mi Currículum Vitae:

- **Redes Informáticas e Infraestructura**
- **Sistemas Eléctricos y Automatización**
- **Perfil Profesional Integral**

La interfaz permite alternar español/inglés en las páginas generales y modo claro/oscuro. Los currículos mantienen una estructura común y utilizan una identidad cromática propia para cada área.

## Tecnologías

- HTML5
- CSS3
- JavaScript moderno sin framework
- Font Awesome
- GitHub Pages

El sitio se mantiene completamente estático. No utiliza React ni PHP y no requiere un proceso de compilación.

## Arquitectura

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
└── assets/
    ├── css/
    │   ├── site.css
    │   └── cv.css
    └── js/
        └── site.js
```

`site.css` contiene la identidad visual general del blog, selector de currículos, página 404, header y footer. `cv.css` contiene únicamente la estructura especializada de los currículos. `site.js` gestiona tema, idioma, navegación móvil, progreso de lectura y animaciones ligeras al hacer scroll.

## Licencia

© 2026 Rubén Enrique Cañizares Miranda. Todos los derechos reservados.

Consulta [`LICENSE`](LICENSE) para los términos aplicables al código, diseño y contenido del repositorio.