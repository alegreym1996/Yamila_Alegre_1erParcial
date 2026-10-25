// selec todos los elementos con clase car
const autos = document.querySelectorAll(".car");
//busca un elemento por su id
const modal = document.getElementById("auto-modal");
const cerrar = document.getElementById("cerrar-modal");
const imagenModal = document.getElementById("modal-imagen");
const nombreModal = document.getElementById("modal-nombre");
const descripcionModal = document.getElementById("modal-descripcion");
const consultar = document.getElementById("modal-consultar");

// Abre la ventana al hacer clic en un auto
//recorre cada auto
autos.forEach(function(auto) {
    // click en un auto 
    auto.addEventListener("click", function() {
        //busca un elemento dentro de otro
        const imagen = auto.querySelector("img");
        const nombre = auto.querySelector("h3").textContent;

        imagenModal.src = imagen.src;
        imagenModal.alt = nombre;
        nombreModal.textContent = nombre;
        descripcionModal.textContent =
            "Conocé el " + nombre +
            ". Contactanos para recibir más información sobre este vehículo.";

        modal.style.display = "flex";
    });
});

// Cierra con la x
cerrar.addEventListener("click", function() {
    modal.style.display = "none";
});

//oculta la ventana, con click en el fondo
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

//detecta cuando se presiona una tecla
document.addEventListener("keydown", function(event) {
    // si es esc
    if (event.key === "Escape") {
        //cierra laventana
        modal.style.display = "none";
    } 
});
//detecta cuando se hace click en "consultar"
consultar.addEventListener("click", function() {
    modal.style.display = "none";
});
