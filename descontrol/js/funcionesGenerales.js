// ? Contiene el personaje actual
let personaje = null
// ? Contiene la carta actual
let carta = null
// ? Indica si el modal de personajes esta activado o no
let esModalAvatar = false
// ? Indica si el boton para mostrar el modal esta activado o no
let esBtnMostrarModalPersonaje = false

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
    textoConsolaPersonaje.addEventListener('click', () => {
        // Limpia el texto
        consolaPersonajeTxt("CONSOLA")
        // Oculta el boton del menu de personajes
        btnMostrarModalPersonaje.style.display = "none"
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