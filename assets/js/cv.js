(() => {
  'use strict';

  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const printButton = document.querySelector('[data-print]');
  const year = document.querySelector('[data-year]');

  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
  let theme = savedTheme || (prefersLight ? 'light' : 'dark');

  function applyTheme(nextTheme) {
    theme = nextTheme === 'light' ? 'light' : 'dark';
    root.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
    if (themeButton) {
      themeButton.textContent = theme === 'dark' ? '◐' : '◑';
      themeButton.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
      themeButton.title = theme === 'dark' ? 'Tema claro' : 'Tema oscuro';
    }
  }

  themeButton?.addEventListener('click', () => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  });

  printButton?.addEventListener('click', () => window.print());

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  if (year) year.textContent = new Date().getFullYear();
  applyTheme(theme);
})();
