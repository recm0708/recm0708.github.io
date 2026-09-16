(() => {
  'use strict';

  /* ==========================================================
     CARGADOR DE LA CAPA PERSONAL
     Mantiene el contenido biográfico separado de los ajustes globales
     de la portada. Los scripts se cargan de forma secuencial.
     ========================================================== */

  function cargarScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  cargarScript('/assets/js/personal-contenido.js?v=20260916-1')
    .then(() => cargarScript('/assets/js/ajustes-portada.js?v=20260916-3'))
    .then(() => cargarScript('/assets/js/site-shell.js?v=20260916-1'))
    .then(() => window.SiteShell?.normalizarPortada())
    .catch((error) => console.error('No se pudo cargar la capa personal de la portada.', error));
})();