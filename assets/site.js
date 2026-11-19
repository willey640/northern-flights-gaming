const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
if (button && nav) {
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); button.focus();
    }
  });
}
