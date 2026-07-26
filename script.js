// Reveal de secciones al hacer scroll (respeta prefers-reduced-motion vía CSS)
const grupos = document.querySelectorAll('.reveal-group');

if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visto');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });

  grupos.forEach((g) => obs.observe(g));
} else {
  grupos.forEach((g) => g.classList.add('visto'));
}
