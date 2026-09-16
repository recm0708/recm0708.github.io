/* Control global del tema. Se carga antes de pintar la página para evitar parpadeos. */
(() => {
  'use strict';

  const KEY = 'recm0708-theme';
  const root = document.documentElement;
  const preferred = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const stored = localStorage.getItem(KEY);
  const initial = stored === 'dark' || stored === 'light' ? stored : preferred;

  root.dataset.theme = initial;

  const icon = (theme) => theme === 'dark'
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9c0-.5-.04-1-.12-1.48A7 7 0 0 1 12 3Z"/></svg>';

  function paintButtons() {
    const theme = root.dataset.theme;
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.innerHTML = icon(theme);
      const es = document.documentElement.lang !== 'en';
      button.setAttribute('aria-label', theme === 'dark'
        ? (es ? 'Cambiar a tema claro' : 'Switch to light theme')
        : (es ? 'Cambiar a tema oscuro' : 'Switch to dark theme'));
    });
  }

  function toggleTheme() {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem(KEY, next);
    paintButtons();
  }

  document.addEventListener('DOMContentLoaded', () => {
    paintButtons();
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.addEventListener('click', toggleTheme);
    });
  });
})();
