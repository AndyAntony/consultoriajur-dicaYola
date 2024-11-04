function openModal() {
    document.getElementById('privacy-modal').style.display = 'block'; // Muestra el modal
}

function closeModal() {
    document.getElementById('privacy-modal').style.display = 'none'; // Oculta el modal
}

// Opción adicional para volver al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Animación suave al volver arriba
    });
}

// Cerrar el modal si el usuario hace clic fuera de la ventana modal
window.onclick = function(event) {
    const modal = document.getElementById('privacy-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// En main.js
document.querySelector('.menu-button').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu ul').classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");

    menuButton.addEventListener("click", function() {
        // Alterna la clase 'menu-visible' para mostrar u ocultar el menú
        menu.classList.toggle("menu-visible");
    });
});
