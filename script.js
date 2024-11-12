const clock = document.getElementById("clock");
const timezoneSelector = document.getElementById("timezone");

// Función para actualizar el reloj
function updateClock() {
    const timezone = timezoneSelector.value;
    const now = new Date();
    
    // Formato de hora en función de la zona horaria seleccionada
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: timezone };
    const formattedTime = new Intl.DateTimeFormat('es-ES', options).format(now);

    clock.textContent = formattedTime;
}

// Cambiar la zona horaria y actualizar el reloj
timezoneSelector.addEventListener("change", updateClock);

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

// Actualizar inmediatamente al cargar la página
updateClock();
