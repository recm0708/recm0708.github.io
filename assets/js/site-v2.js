/* Interacciones generales: idioma, navegación móvil y aparición suave. */
(() => {
  'use strict';

  const LANG_KEY = 'recm0708-language';

  function currentLanguage() {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === 'en' || stored === 'es') return stored;
    return document.documentElement.lang === 'en' ? 'en' : 'es';
  }

  function applyLanguage(lang) {
    if (!document.body.hasAttribute('data-bilingual')) return;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang-es][data-lang-en]').forEach((node) => {
      const value = node.getAttribute(lang === 'en' ? 'data-lang-en' : 'data-lang-es');
      if (value !== null) node.textContent = value;
    });
    document.querySelectorAll('[data-href-es][data-href-en]').forEach((node) => {
      node.setAttribute('href', node.getAttribute(lang === 'en' ? 'data-href-en' : 'data-href-es'));
    });
    const title = document.body.getAttribute(lang === 'en' ? 'data-title-en' : 'data-title-es');
    if (title) document.title = title;
    localStorage.setItem(LANG_KEY, lang);
  }

  function setupLanguage() {
    if (!document.body.hasAttribute('data-bilingual')) return;
    applyLanguage(currentLanguage());
    document.querySelectorAll('[data-lang-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        applyLanguage(document.documentElement.lang === 'en' ? 'es' : 'en');
      });
    });
  }

  function setupMobileNav() {
    const button = document.querySelector('[data-menu-toggle]');
    const nav = document.querySelector('[data-mobile-nav]');
    if (!button || !nav) return;
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      button.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }));
  }

  function setupReveal() {
    const nodes = [...document.querySelectorAll('.reveal')];
    if (!nodes.length) return;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .12 });
    nodes.forEach((node) => observer.observe(node));
  }

  function setupBackToTop() {
    document.querySelectorAll('[data-back-top]').forEach((link) => {
      link.addEventListener('click', (event) => {
        if (link.getAttribute('href') !== '#top') return;
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    setupLanguage();
    setupMobileNav();
    setupReveal();
    setupBackToTop();
  });
})();
