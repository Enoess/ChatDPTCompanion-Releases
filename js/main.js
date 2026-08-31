/* ============================================
   ChatDPT Companion - Landing Page Scripts
   ============================================ */

(function () {
  'use strict';

  var LANGS = ['fr', 'en', 'es', 'pt'];
  var LANG_LABELS = { fr: 'FR', en: 'EN', es: 'ES', pt: 'PT' };
  var LANG_NEXT = { fr: 'en', en: 'es', es: 'pt', pt: 'fr' };
  var LANG_KEY = 'chatdpt-lang';

  function getLang() {
    var stored = localStorage.getItem(LANG_KEY);
    if (stored && LANGS.indexOf(stored) !== -1) return stored;
    return 'fr';
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);

    LANGS.forEach(function (l) {
      document.querySelectorAll('[data-' + l + ']').forEach(function (el) {
        el.style.display = l === lang ? '' : 'none';
      });
    });

    var btn = document.getElementById('lang-toggle');
    if (btn) {
      var next = LANG_NEXT[lang];
      btn.textContent = LANG_LABELS[next];
      btn.title = LANG_LABELS[next];
    }
  }

  function toggleLang() {
    var current = getLang();
    setLang(LANG_NEXT[current]);
  }

  // --- Mobile Menu ---
  function toggleMobileMenu() {
    var links = document.getElementById('navbar-links');
    if (links) {
      links.classList.toggle('open');
    }
  }

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

  // --- Lightbox ---
  window.openLightbox = function (card) {
    var img = card.querySelector('img');
    if (!img) return;
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function () {
    var lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      window.closeLightbox();
    }
  });
})();
