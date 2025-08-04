// script.js

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

