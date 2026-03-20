// Hamburger menu toggle
function toggleNav() {
  var nav = document.getElementById('main-nav');
  var btn = document.getElementById('hamburger');
  if (!nav || !btn) return;
  var isOpen = nav.classList.contains('open');
  nav.classList.toggle('open');
  btn.classList.toggle('open');
}

// Close menu when a nav link is clicked
(function() {
  function bindLinks() {
    var links = document.querySelectorAll('#main-nav a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function() {
        var nav = document.getElementById('main-nav');
        var btn = document.getElementById('hamburger');
        if (nav) nav.classList.remove('open');
        if (btn) btn.classList.remove('open');
      });
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindLinks);
  } else {
    bindLinks();
  }
})();
