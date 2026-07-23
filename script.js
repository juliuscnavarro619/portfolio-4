
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
if (toggle && header) {
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('#primary-nav a').forEach(link => link.addEventListener('click', () => header?.classList.remove('open')));

document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
