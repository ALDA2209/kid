// script.js

// 1) Lógica del formulario
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validación nativa (required, type, etc.)
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Recolecta datos
    const data = Object.fromEntries(new FormData(form).entries());

    // Mostrar ventana emergente
    alert(`✅ ¡Gracias, ${data.nombre}! Te contactaremos pronto.`);

    // Limpia el formulario
    form.reset();
  });
}

// 2) Fade-in del contenido del hero al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.hero-overlay');
  if (overlay) {
    // Empezar invisible
    overlay.style.opacity = 0;
    overlay.style.transition = 'opacity 1s ease-out';

    // Mostrar con un pequeño retraso
    setTimeout(() => {
      overlay.style.opacity = 1;
    }, 200);
  }
});

// 3) Parallax suave en el fondo del hero al hacer scroll
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    const offset = window.scrollY * 0.3;  // controla la intensidad
    hero.style.backgroundPosition = `center calc(50% + ${offset}px)`;
  }
});
