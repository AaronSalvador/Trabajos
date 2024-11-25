// Función para manejar el envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('¡Formulario enviado con éxito!\n\n' +
              'Nombre: ' + name + '\n' +
              'Correo: ' + email + '\n' +
              'Mensaje: ' + message);
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
