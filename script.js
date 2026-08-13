document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contacto');
  const mensaje = document.getElementById('mensaje-enviado');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    mensaje.classList.remove('oculto');
    form.reset();
  });

  // Scroll suave para los enlaces del menú
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const destino = document.querySelector(link.getAttribute('href'));
      destino.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
