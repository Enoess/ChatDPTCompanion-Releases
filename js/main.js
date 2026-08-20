/* ============================================
   ChatDPT Companion - Landing Page Scripts
   ============================================ */

(function () {
  'use strict';

  // --- Language Toggle ---
  const LANG_KEY = 'chatdpt-lang';

  function getLang() {
    return localStorage.getItem(LANG_KEY) || 'fr';
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-fr]').forEach(function (el) {
      el.style.display = lang === 'fr' ? '' : 'none';
    });
    document.querySelectorAll('[data-en]').forEach(function (el) {
      el.style.display = lang === 'en' ? '' : 'none';
    });

    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.textContent = lang === 'fr' ? 'EN' : 'FR';
      btn.title = lang === 'fr' ? 'Switch to English' : 'Passer en français';
    }
  }

  function toggleLang() {
    setLang(getLang() === 'fr' ? 'en' : 'fr');
  }

  // --- Mobile Menu ---
  function toggleMobileMenu() {
    var links = document.getElementById('navbar-links');
    if (links) {
      links.classList.toggle('open');
    }
  }

  // --- Close mobile menu on link click ---
  function closeMobileMenu() {
    var links = document.getElementById('navbar-links');
    if (links) {
      links.classList.remove('open');
    }
  }

  // --- Init ---
  document.addEventListener('DOMContentLoaded', function () {
    applyLang(getLang());

    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', toggleLang);
    }

    var menuBtn = document.getElementById('mobile-menu-btn');
    if (menuBtn) {
      menuBtn.addEventListener('click', toggleMobileMenu);
    }

    var navLinks = document.querySelectorAll('#navbar-links a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });
  });
})();
