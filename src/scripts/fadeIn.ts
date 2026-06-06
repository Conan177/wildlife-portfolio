// src/scripts/fadeIn.ts
// Osserva tutti gli elementi .fade-in nella pagina corrente
// e aggiunge .is-visible quando entrano nel viewport.
// Importa questo file nel frontmatter di ogni pagina che usa fade-in:
//   import '../scripts/fadeIn.ts';

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));