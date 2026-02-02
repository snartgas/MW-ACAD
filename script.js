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
    var formationFieldset = document.getElementById('formations-checkboxes');

    function updateFormationHelp() {
      var help = document.getElementById('formation-help');
      if (!formationFieldset || !help) return;
      var checked = formationFieldset.querySelectorAll('input[type="checkbox"]:checked').length;
 //     help.textContent = 'Sélectionnées: ' + checked;
    }

    if (formationFieldset) {
      var checkboxes = formationFieldset.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(function (cb) {
        cb.addEventListener('change', function () {
          updateFormationHelp();
        });
      });
      updateFormationHelp();
    }

    form.addEventListener('submit', function (e) {
      if (formationFieldset) {
        var checked = formationFieldset.querySelectorAll('input[type="checkbox"]:checked').length;
        if (checked === 0) {
          e.preventDefault();
          var help = document.getElementById('formation-help');
          if (help) {
            help.textContent = 'Veuillez sélectionner au moins une formation.';
            help.classList.add('error');
            setTimeout(function () { updateFormationHelp(); help.classList.remove('error'); }, 2000);
          } else {
            alert('Veuillez sélectionner au moins une formation.');
          }
          return false;
        }
      }
    });
  }
})();
