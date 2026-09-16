(() => {
  'use strict';

  /* ==========================================================
     AJUSTES GLOBALES DE LA PORTADA
     - Sincroniza el tema seleccionado con el resto del sitio.
     - Ordena los perfiles sociales por categoría.
     - Evita duplicar LinkedIn y GitHub, ya mostrados en Contacto.
     - Normaliza enlaces especiales de YouTube, Telegram, Credly y Udemy.
     - Mantiene bilingües los encabezados de las categorías sociales.
     ========================================================== */

  const CLAVE_TEMA = 'portfolio-theme';
  const raiz = document.documentElement;

  function idiomaActual() {
    return raiz.lang?.toLowerCase().startsWith('en') ? 'en' : 'es';
  }

  function temaGuardado() {
    const guardado = localStorage.getItem(CLAVE_TEMA);
    if (guardado === 'light' || guardado === 'dark') return guardado;
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function aplicarTemaGlobal(tema) {
    const normalizado = tema === 'light' ? 'light' : 'dark';
    raiz.dataset.theme = normalizado;

    const boton = document.querySelector('[data-theme-toggle]');
    if (boton) {
      boton.setAttribute('aria-label', normalizado === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
      boton.title = normalizado === 'dark' ? 'Tema claro' : 'Tema oscuro';
    }
  }

  /* Mantiene sincronizadas otras pestañas del mismo dominio. */
  window.addEventListener('storage', (evento) => {
    if (evento.key === CLAVE_TEMA && (evento.newValue === 'light' || evento.newValue === 'dark')) {
      aplicarTemaGlobal(evento.newValue);
    }
  });

  function instalarEstilosSociales() {
    if (document.querySelector('#social-groups-styles')) return;

    const style = document.createElement('style');
    style.id = 'social-groups-styles';
    style.textContent = `
      .social-grid.social-groups{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:18px!important;border:0!important}
      .social-category{border:1px solid var(--line);background:rgba(5,18,17,.18)}
      .social-category-title{margin:0;padding:11px 14px;border-bottom:1px solid var(--line);color:var(--signal);font:800 .66rem/1.2 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.08em;text-transform:uppercase}
      .social-category-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}
      .social-category-grid .social-card{min-height:54px!important;padding:10px 13px!important;border:0!important;border-right:1px solid var(--line)!important;border-bottom:1px solid var(--line)!important;display:flex!important;align-items:center!important;gap:11px!important}
      .social-category-grid .social-card:nth-child(2n){border-right:0!important}
      .social-category-grid .social-card:nth-last-child(-n+2){border-bottom:0!important}
      .social-category-grid .social-card:only-child{border-right:0!important;border-bottom:0!important}
      .social-category-grid .social-card>svg:not(.out){width:18px!important;height:18px!important;flex:0 0 18px}
      .social-category-grid .social-card strong{font-size:.81rem!important}
      .social-category-grid .social-card small,.social-category-grid .social-card .out{display:none!important}
      html[data-theme="light"] .social-category{background:rgba(219,230,226,.34)}
      @media(max-width:880px){.social-grid.social-groups{grid-template-columns:1fr!important}}
      @media(max-width:520px){.social-category-grid{grid-template-columns:1fr}.social-category-grid .social-card{border-right:0!important}.social-category-grid .social-card:not(:last-child){border-bottom:1px solid var(--line)!important}.social-category-grid .social-card:last-child{border-bottom:0!important}}
    `;
    document.head.appendChild(style);
  }

  const categorias = [
    {
      clave: 'social',
      titulo: { es: 'Redes sociales', en: 'Social networks' },
      nombres: ['Facebook', 'Instagram', 'Reddit', 'Threads', 'TikTok', 'X']
    },
    {
      clave: 'contenido',
      titulo: { es: 'Contenido y entretenimiento', en: 'Content & entertainment' },
      nombres: ['Spotify', 'Steam', 'YouTube']
    },
    {
      clave: 'formacion',
      titulo: { es: 'Formación y credenciales', en: 'Learning & credentials' },
      nombres: ['Credly', 'Udemy']
    },
    {
      clave: 'mensajeria',
      titulo: { es: 'Mensajería', en: 'Messaging' },
      nombres: ['Telegram']
    }
  ];

  function actualizarIdiomaSocial() {
    const idioma = idiomaActual();

    categorias.forEach((categoria) => {
      const titulo = document.querySelector(`[data-social-category="${categoria.clave}"] .social-category-title`);
      if (titulo) titulo.textContent = categoria.titulo[idioma];
    });

    document.querySelectorAll('.social-category-grid .social-card').forEach((tarjeta) => {
      const nombre = tarjeta.querySelector('strong')?.textContent?.trim();
      if (!nombre) return;
      tarjeta.setAttribute('aria-label', idioma === 'en' ? `Open ${nombre}` : `Abrir ${nombre}`);
    });
  }

  function normalizarRedesSociales() {
    const grid = document.querySelector('.social-grid');
    if (!grid) return;

    if (grid.dataset.organizada === 'true') {
      actualizarIdiomaSocial();
      return;
    }

    instalarEstilosSociales();

    const tarjetas = Array.from(grid.querySelectorAll('a.social-card'));
    const porNombre = new Map();

    tarjetas.forEach((tarjeta) => {
      const nombre = tarjeta.querySelector('strong')?.textContent?.trim();
      if (!nombre) return;

      if (porNombre.has(nombre)) {
        tarjeta.remove();
        return;
      }
      porNombre.set(nombre, tarjeta);
    });

    /* LinkedIn y GitHub ya están destacados como canales profesionales arriba. */
    ['LinkedIn', 'GitHub'].forEach((nombre) => {
      porNombre.get(nombre)?.remove();
      porNombre.delete(nombre);
    });

    const youtube = porNombre.get('YouTube');
    if (youtube) youtube.href = 'https://www.youtube.com/@recm0708';

    const telegram = porNombre.get('Telegram');
    if (telegram) {
      const mensaje = 'Hola Rubén, vi tu portafolio profesional y quisiera ponerme en contacto contigo.';
      telegram.href = `https://t.me/recm0708?text=${encodeURIComponent(mensaje)}`;
    }

    const credly = porNombre.get('Credly');
    if (credly) credly.href = 'https://www.credly.com/users/recm0708/badges/credly';

    const udemy = porNombre.get('Udemy');
    if (udemy) udemy.href = 'https://www.udemy.com/user/ruben-enrique-canizares-miranda/';

    grid.innerHTML = '';
    grid.classList.add('social-groups');

    categorias.forEach((categoria) => {
      const disponibles = categoria.nombres
        .filter((nombre) => porNombre.has(nombre))
        .sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

      if (!disponibles.length) return;

      const seccion = document.createElement('section');
      seccion.className = 'social-category';
      seccion.dataset.socialCategory = categoria.clave;

      const encabezado = document.createElement('h3');
      encabezado.className = 'social-category-title';

      const lista = document.createElement('div');
      lista.className = 'social-category-grid';

      disponibles.forEach((nombre) => {
        const tarjeta = porNombre.get(nombre);
        tarjeta.target = '_blank';
        tarjeta.rel = 'noopener noreferrer';
        lista.appendChild(tarjeta);
      });

      seccion.append(encabezado, lista);
      grid.appendChild(seccion);
    });

    grid.dataset.organizada = 'true';
    actualizarIdiomaSocial();
  }

  new MutationObserver(() => {
    actualizarIdiomaSocial();
  }).observe(raiz, { attributes: true, attributeFilter: ['lang'] });

  function inicializar() {
    aplicarTemaGlobal(temaGuardado());
    normalizarRedesSociales();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar, { once: true });
  } else {
    inicializar();
  }
})();