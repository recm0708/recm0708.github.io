# recm0708.github.io

Sitio personal, portafolio profesional y centro bilingüe de currículum vitae de **Rubén Enrique Cañizares Miranda**.

La raíz del sitio está concebida como un **portafolio profesional personal**, no como una simple página para descargar currículos. Su objetivo es presentar quién soy, mi trayectoria, mis áreas técnicas, proyectos públicos, infraestructura de laboratorio, perfiles profesionales y canales de contacto.

El directorio `/cv/` funciona como entrada independiente a tres versiones especializadas de mi currículum. Cada perfil tiene estructura, jerarquía de contenido e identidad visual propias; no se reutiliza una misma plantilla cambiando únicamente colores.

## Estado actual

El sitio se encuentra en desarrollo continuo y actualmente incluye:

- Página personal bilingüe redactada en primera persona.
- Identidad visual principal orientada a redes, infraestructura y automatización.
- Integración de fotografía de perfil.
- Secciones de perfil personal, trayectoria, áreas técnicas, laboratorio, proyectos, currículum y contacto.
- Perfiles sociales oficiales reunidos en la portada.
- Centro independiente de Currículum Vitae.
- CV de Sistemas Eléctricos y Automatización — español / inglés.
- CV de Redes Informáticas e Infraestructura — español / inglés.
- CV General / Multidisciplinario — español / inglés.
- Diseño adaptable para escritorio, tablet y móvil.
- Modo oscuro y modo claro.
- Paletas claras suavizadas, evitando fondos blancos puros cuando no son necesarios.
- Función de impresión / Guardar como PDF para los currículos.
- Navegación de retorno al inicio en páginas extensas.
- Página 404 personalizada.
- Metadatos básicos para SEO, vista previa social, `robots.txt` y `sitemap.xml`.
- Licencia propia del portafolio con todos los derechos reservados.

Las versiones web de los currículos son deliberadamente más amplias que los documentos ATS. Pueden incluir proyectos, herramientas, infraestructura, laboratorios, credenciales, experiencia complementaria y contexto técnico que no resulta práctico incluir en un currículo ATS breve. Los PDF ATS se mantendrán por separado.

## Arquitectura

```text
/
├── index.html                 # Página personal / portafolio
├── cv/
│   └── index.html             # Selector de perfiles de Currículum Vitae
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
├── LICENSE                    # Licencia del portafolio
├── README.md                  # Documentación principal
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
    │   └── cv.js
    ├── images/
    └── documents/
```

## Estrategia visual

El sitio evita deliberadamente imponer un único sistema visual a todas las páginas.

- **Página personal:** identidad inspirada en redes, infraestructura, topologías y operación técnica, combinada con una narrativa personal en primera persona.
- **Centro de CV:** selector editorial neutral que dirige al visitante hacia el perfil profesional apropiado.
- **CV Eléctrico:** identidad relacionada con energía, instalaciones, mantenimiento, baja tensión, control y automatización.
- **CV de Redes:** identidad basada en topología, CLI, routing, switching, sistemas, infraestructura, SDN y observabilidad.
- **CV General:** presentación editorial multidisciplinaria que integra electricidad, tecnología, soporte e infraestructura.

Las funciones compartidas —como preferencia de idioma, apariencia, impresión y retorno al inicio— se reutilizan cuando corresponde, sin obligar a que las páginas se vean iguales.

## URLs actuales

### Sistemas Eléctricos y Automatización

- ES: <https://recm0708.github.io/es/electrica/>
- EN: <https://recm0708.github.io/en/electrical/>

### Redes Informáticas e Infraestructura

- ES: <https://recm0708.github.io/es/redes/>
- EN: <https://recm0708.github.io/en/networks/>

### Perfil General / Multidisciplinario

- ES: <https://recm0708.github.io/es/general/>
- EN: <https://recm0708.github.io/en/general/>

## Tecnologías

- HTML5 semántico.
- CSS3 moderno.
- Iconografía SVG en línea.
- JavaScript nativo.
- Diseño adaptable.
- Temas claro y oscuro.
- Experiencia en español e inglés.
- Diseños de CV optimizados para impresión.
- GitHub Pages.
- Sin framework de interfaz ni dependencia de ejecución de terceros.

## Convenciones de mantenimiento

A partir de esta versión se aplican las siguientes reglas al código y documentación del repositorio:

1. **README, documentación técnica y comentarios internos del código se redactan en español.**
2. Los textos que formen parte de la interfaz bilingüe pueden existir en español e inglés cuando sea necesario.
3. Los nombres técnicos propios de tecnologías, protocolos, productos, clases CSS, atributos HTML o APIs se conservan en su forma apropiada cuando traducirlos afectaría claridad o funcionamiento.
4. Los bloques importantes de HTML, CSS y JavaScript deben incluir comentarios en español que expliquen su propósito cuando esto facilite mantenimiento futuro.
5. El portal se presenta como un **sitio y portafolio profesional**. No se describe públicamente como proyecto educativo, académico o demostrativo.
6. La información personal publicada debe ser intencional y pertinente. No se deben incorporar documentos sensibles ni datos privados innecesarios.
7. Los perfiles sociales y enlaces externos deben corresponder a cuentas confirmadas por el propietario del sitio.
8. Los cambios importantes de recursos estáticos pueden utilizar un parámetro de versión (`?v=`) para evitar que el navegador conserve CSS o JavaScript obsoleto en caché.
9. Los mensajes de commit creados durante el mantenimiento del portal se redactan preferentemente en español, manteniendo únicamente términos técnicos en inglés cuando sean nombres propios o convenciones ampliamente reconocidas.
10. Las cadenas de la interfaz inglesa se conservan en inglés porque forman parte de la funcionalidad bilingüe; no se consideran documentación interna del repositorio.
11. El código heredado que deje de ser utilizado debe eliminarse en lugar de conservarse como archivo huérfano.

## Modelo de publicación

GitHub Pages publica directamente desde la rama `main` y desde la raíz del repositorio.

- Sitio personal: <https://recm0708.github.io/>
- Centro de Currículum Vitae: <https://recm0708.github.io/cv/>

## Próximas ampliaciones

Entre las ampliaciones previstas se encuentran:

- Enriquecer la página personal con historia, metas, intereses, pasatiempos, viajes, experiencias y otros elementos personales que se aprueben para publicación.
- Ampliar el CV Eléctrico más allá de su estructura inicial derivada del formato ATS.
- Crear una sección dedicada de credenciales y certificaciones.
- Publicar certificados y diplomas aprobados en formato PDF.
- Incorporar los currículos ATS como documentos descargables independientes.
- Sustituir la fotografía de GitHub por una fotografía profesional local aprobada.
- Crear páginas más completas para proyectos destacados.
- Incorporar arte final para Open Graph, vista previa social y favicon.

## Privacidad y documentos

Este repositorio es público. Solo debe almacenarse información profesional o personal que haya sido aprobada expresamente para publicación abierta.

No deben publicarse documentos de identificación sensibles, registros privados, información confidencial de empleadores, contraseñas, direcciones privadas ni otros datos innecesarios.

Los archivos PDF quedan reservados principalmente para documentos profesionales aprobados, tales como:

- currículos ATS;
- certificados;
- diplomas;
- licencias o idoneidades;
- credenciales de respaldo cuya publicación sea apropiada.

## Licencia

Este repositorio utiliza una licencia propia de **todos los derechos reservados**. El código y el contenido se encuentran públicamente visibles para revisión, referencia profesional y mantenimiento autorizado, pero su publicación en GitHub no concede permiso general para copiar, modificar, redistribuir o reutilizar el sitio o sus materiales.

Las condiciones completas se encuentran en el archivo [`LICENSE`](./LICENSE).

## Mantenimiento técnico

El sitio se mantiene estático para reducir dependencias, simplificar mantenimiento a largo plazo, conservar tiempos de carga bajos y permitir que el contenido permanezca portable y fácil de editar.
