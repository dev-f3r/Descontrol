// ? Contiene el personaje actual
let personaje = null
// ? Contiene la carta actual
let carta = null
// ? Indica si el modal de personajes esta activado o no
let esModalAvatar = false
// ? Indica si el boton para mostrar el modal esta activado o no
let esBtnMostrarModalPersonaje = false

/**
 * ? Muestra los datos del personaje actual incluyendo imagen, atributos
 * y descripción.
 * 
 * @param {Object} personaje - El objeto del personaje actual
 */
function mostrarPersonaje(personaje) {
    // Establece la imagen del personaje basado en la propiedad personaje.imagen
    imgPersonaje.src = personaje.imagen;
    // Recorre las claves de atributo definidas y actualiza los elementos de la UI
    const atributos = ["ataque", "esquiva", "velocidad", "vida", "accion"];
    atributos.forEach(key => {
        document.getElementById(`${key}Indicador`).textContent = personaje[key];
    });
    // Muestra la descripción del personaje en la consola
    consolaPersonajeTxt(personaje.descripcion);
}

// TODO: Completar
function mostrarCarta() {

}

{ // * Triggers
    // ? Captura el click del boton de personaje
    personajeBtn.addEventListener('click', () => {
        // Si ya hay un personaje seleccionado muestra su descripcion
        if (personaje) consolaPersonajeTxt(personaje.descripcion)
        // Caso contrario indica que se debe seleccionar uno
        else consolaPersonajeTxt("Selecciona un personaje")
        // Hace visible el boton para cambio de personajes
        btnMostrarModalPersonaje.style.display = "flex"
    })
    // ? Captura el click del boton para cerrar el modal de personajes
    cerrarModal.addEventListener('click', () => {
        // Oculta el modal de personajes
        modalAvatares.style.display = "none"
        // Actualiza la bandera
        esModalAvatar = false
    })

    // ? Captura el click del boton para mostrar el modal de personajes
    btnMostrarModalPersonaje.addEventListener('click', () => {
        // Si el modal de personajes esta activado lo oculta y actualiza la bandera
        if (esModalAvatar) {
            modalAvatares.style.display = "none"
            esModalAvatar = false
        }
        // Si el modal de personajes esta desactivado lo activa y actualiza la bandera
        else {
            modalAvatares.style.display = "grid"
            esModalAvatar = true
        }
    })

    // ? Captura el click de la consola de personaje
    consolaPersonaje.addEventListener('click', () => {
        // Limpia el texto
        consolaPersonajeTxt("")
        // Oculta el boton del menu de personajes
        btnMostrarModalPersonaje.style.display = "none"
    })

    // * Identificadores de cada boton en el menu de personajes
    const idBtnPersonaje = ["personaje1", "personaje2", "personaje3", "personaje4", "personaje5"]
    // Recorre cada identificador y les agrega un evento
    idBtnPersonaje.forEach(id => {
        // ? Captura el click de un personaje a elegir
        document.getElementById(id).addEventListener('click', () => {
            // Cambia el personaje actual
            cambiarPersonaje(id)
            // Lo muestra
            mostrarPersonaje()
            // Cierra el modal
            cerrarModal.click()
        })
    })
}

{ // * Helpers
    /**
     * ? Cambia el contenido de la consola de personajes
     * @param {string} txt - el texto nuevo
     */
    function consolaPersonajeTxt(txt) {
        textoConsolaPersonaje.textContent = txt
    }
}