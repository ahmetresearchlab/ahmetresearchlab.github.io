function toggleNav() {
  var nav = document.getElementById('main-nav');
  var btn = document.getElementById('hamburger');

  if (!nav || !btn) return;

  var isOpen = nav.classList.contains('open');

  if (isOpen) {
    nav.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  } else {
    nav.classList.add('open');
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

(function () {

  function closeNav() {
    var nav = document.getElementById('main-nav');
    var btn = document.getElementById('hamburger');

    if (!nav || !btn) return;

    nav.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }

  function bindNav() {
    var nav = document.getElementById('main-nav');
    var btn = document.getElementById('hamburger');

    if (!nav || !btn) return;

    btn.setAttribute('aria-expanded', 'false');

    // Linke tıklayınca kapat
    var links = nav.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () {
        if (window.innerWidth <= 640) {
          closeNav();
        }
      });
    }

    // Dışarı tıklayınca kapat
    document.addEventListener('click', function (e) {
      if (window.innerWidth > 640) return;

      var clickedInsideNav = nav.contains(e.target);
      var clickedButton = btn.contains(e.target);

      if (!clickedInsideNav && !clickedButton) {
        closeNav();
      }
    });

    // ESC ile kapat
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeNav();
      }
    });

    // Resize fix
    window.addEventListener('resize', function () {
      if (window.innerWidth > 640) {
        closeNav();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindNav);
  } else {
    bindNav();
  }

})();
