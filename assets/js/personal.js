(() => {
  'use strict';

  /* ==========================================================
     CARGADOR DE LA CAPA PERSONAL
     Mantiene el contenido biográfico separado de los ajustes globales
     de la portada. Los scripts se cargan de forma secuencial para que
     las redes sociales existan antes de ser ordenadas y normalizadas.
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

  cargarScript('/assets/js/personal-contenido.js?v=20260915-2')
    .then(() => cargarScript('/assets/js/ajustes-portada.js?v=20260915-2'))
    .catch((error) => console.error('No se pudo cargar la capa personal de la portada.', error));
})();
