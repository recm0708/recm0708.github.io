(() => {
  'use strict';

  /* ==========================================================
     CURRÍCULOS — COMPORTAMIENTO COMPARTIDO
     Unifica tema, cabecera minimalista, pie, navegación interna y
     rutas de idioma. El diseño de contenido pertenece a cada área.
     ========================================================== */

  const root = document.documentElement;
  const THEME_KEY = 'portfolio-theme';
  const guardado = localStorage.getItem(THEME_KEY);
  if (guardado === 'light' || guardado === 'dark') root.dataset.theme = guardado;

  const paresIdioma = {
    '/cv/es/redes/': '/cv/en/networks/',
    '/cv/en/networks/': '/cv/es/redes/',
    '/es/electrica/': '/en/electrical/',
    '/en/electrical/': '/es/electrica/',
    '/es/general/': '/en/general/',
    '/en/general/': '/es/general/'
  };

  function rutaActual() {
    const ruta = window.location.pathname;
    return ruta.endsWith('/') ? ruta : `${ruta}/`;
  }

  function cargarScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src^="${src.split('?')[0]}"]`)) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function prepararCascaron() {
    return cargarScript('/assets/js/site-shell.js?v=20260916-2').then(() => {
      window.SiteShell?.cargarEstilos();
      const idiomaDestino = paresIdioma[rutaActual()] || null;
      window.SiteShell?.construirCabecera({ languageHref: idiomaDestino, currentSection: 'cv', minimal: true });
      window.SiteShell?.construirPie();
      window.SiteShell?.limpiarRetornosDuplicados();
    });
  }

  function instalarNavegacionInterna() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      if (link.dataset.shellTop !== undefined) return;
      link.addEventListener('click', (event) => {
        const destino = link.getAttribute('href');
        if (!destino || destino === '#') return;
        if (destino === '#top') {
          event.preventDefault();
          window.SiteShell?.volverArriba();
          return;
        }
        const objetivo = document.querySelector(destino);
        if (!objetivo) return;
        event.preventDefault();
        objetivo.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function instalarImpresion() {
    document.querySelectorAll('[data-print]').forEach((boton) => {
      boton.addEventListener('click', () => window.print());
    });
  }

  document.body.id ||= 'top';
  prepararCascaron()
    .then(() => {
      instalarNavegacionInterna();
      instalarImpresion();
    })
    .catch((error) => console.error('No se pudo cargar el cascarón común de los currículos.', error));
})();
