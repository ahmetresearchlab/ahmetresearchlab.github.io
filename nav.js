// Hamburger menu
function toggleNav() {
  const nav = document.getElementById('main-nav');
  const btn = document.getElementById('hamburger');
  nav.classList.toggle('open');
  btn.classList.toggle('open');
}
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('main-nav').classList.remove('open');
      document.getElementById('hamburger').classList.remove('open');
    });
  });
});
