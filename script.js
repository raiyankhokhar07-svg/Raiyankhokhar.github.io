const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const progress = document.getElementById('scroll-progress');
const onScroll = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const width = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  if (progress) progress.style.width = `${width}%`;
};
window.addEventListener('scroll', onScroll);
onScroll();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const toggle = document.getElementById('mobile-toggle');
const drawer = document.getElementById('mobile-drawer');
if (toggle && drawer) {
  toggle.addEventListener('click', () => {
    drawer.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
}
