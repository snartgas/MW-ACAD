(function () {
  'use strict';

  // --- Thème (sombre / clair) ---
  var themeKey = 'mwacad-theme';
  var html = document.documentElement;

  function setTheme(theme) {
    theme = theme || 'sombre';
    html.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-theme') === theme);
    });
    try { localStorage.setItem(themeKey, theme); } catch (e) {}
  }

  document.querySelectorAll('.theme-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setTheme(btn.getAttribute('data-theme'));
    });
  });

  var saved = null;
  try { saved = localStorage.getItem(themeKey); } catch (e) {}
  if (saved && ['sombre', 'clair'].indexOf(saved) >= 0) {
    setTheme(saved);
  }

  // --- Menu mobile ---
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-label', navLinks.classList.contains('is-open') ? 'Fermer le menu' : 'Ouvrir le menu');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { navLinks.classList.remove('is-open'); });
    });
  }

  // --- Bannière cookies ---
  var cookieKey = 'mwacad-cookies';
  var banner = document.getElementById('cookie-banner');

  function hideCookieBanner() {
    if (banner) banner.classList.add('hidden');
  }

  function acceptCookies() {
    try { localStorage.setItem(cookieKey, 'accept'); } catch (e) {}
    hideCookieBanner();
  }

  function refuseCookies() {
    try { localStorage.setItem(cookieKey, 'refuse'); } catch (e) {}
    hideCookieBanner();
  }

  if (banner) {
    var stored = null;
    try { stored = localStorage.getItem(cookieKey); } catch (e) {}
    if (stored === 'accept' || stored === 'refuse') {
      hideCookieBanner();
    }
    var acceptBtn = document.getElementById('cookie-accept');
    var refuseBtn = document.getElementById('cookie-refuse');
    if (acceptBtn) acceptBtn.addEventListener('click', acceptCookies);
    if (refuseBtn) refuseBtn.addEventListener('click', refuseCookies);
  }

  // --- Formulaire contact ---
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Message envoyé ! Nous vous recontacterons rapidement.');
      form.reset();
    });
  }
})();
