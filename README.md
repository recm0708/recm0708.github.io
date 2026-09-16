# Blog personal y portafolio profesional de Rubén Cañizares

Repositorio del sitio personal y portafolio profesional de **Rubén Enrique Cañizares Miranda**, publicado mediante GitHub Pages.

**Sitio:** https://recm0708.github.io/

## Propósito

El sitio funciona como un blog personal y profesional. Reúne mi historia, trayectoria, metas, proyectos, intereses, voluntariado, perfiles públicos y tres versiones de mi Currículum Vitae:

- **Redes Informáticas e Infraestructura**
- **Sistemas Eléctricos y Automatización**
- **Perfil Profesional Integral**

La interfaz permite alternar español/inglés y modo claro/oscuro. Los currículos mantienen una estructura común y utilizan una identidad cromática propia para cada área.

## Tecnologías

- HTML5
- CSS3
- JavaScript ES Modules
- React 18
- Framer Motion
- HTM
- Font Awesome
- GitHub Pages

React, Framer Motion y HTM se cargan como módulos ESM desde CDN, por lo que el sitio conserva el despliegue estático de GitHub Pages sin requerir un proceso de compilación.

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
    │   └── app.css
    └── js/
        ├── app.js
        └── content.js
```

`content.js` centraliza el contenido bilingüe y los datos de los perfiles. `app.js` contiene los componentes React, el enrutamiento por URL, el cambio de idioma/tema y las animaciones. `app.css` contiene el sistema visual completo.

## Licencia

© 2026 Rubén Enrique Cañizares Miranda. Todos los derechos reservados.

Consulta [`LICENSE`](LICENSE) para los términos aplicables al código, diseño y contenido del repositorio.
