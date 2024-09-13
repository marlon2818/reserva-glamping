document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario para manejarlo con JavaScript
    
    // Obtén los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const checkInDate = document.getElementById('check-in').value;
    const checkOutDate = document.getElementById('check-out').value;
    
    // Validar que la fecha de salida sea después de la fecha de entrada
    if (new Date(checkInDate) >= new Date(checkOutDate)) {
        alert('La fecha de salida debe ser después de la fecha de entrada.');
        return;
    }
    
    // Muestra el mensaje de confirmación
    const confirmationMessage = `Nombre: ${name}\nCorreo Electrónico: ${email}\nNumero de telefono: ${number}\nFecha de Entrada: ${checkInDate}\nFecha de Salida: ${checkOutDate}`;
    
    document.getElementById('confirmation-message').innerText = confirmationMessage;
    document.getElementById('confirmation').classList.remove('hidden');
    
    // Limpiar el formulario
    document.getElementById('reservation-form').reset();
});
