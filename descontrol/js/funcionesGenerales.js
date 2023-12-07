// ? Contiene el personaje actual
let personaje = null
// ? Contiene la carta actual
let carta = null
// ? Indica si el modal de personajes esta activado o no
let esModalAvatar = false
// ? Indica si se esta mostrando el modal de cambio de estado
let esModalCambioEstado = false
// ? Indica si el boton para mostrar el modal esta activado o no
let esBtnMostrarModalPersonaje = false
// ? Indica si se estan mostrando los botones mas y menos
let esBtnMasMenos = false

/**
 * ? Mestra u oculta los botones + y -
 */
function mostrarBtnMasMenos() {
    // Verifica si los botones están visibles
    if (esBtnMasMenos) {
        // Oculta los botones
        esBtnMasMenos = false
        btnMasMenos.style.display = "none"
    } else {
        // Hace visibles los botones
        esBtnMasMenos = true
        btnMasMenos.style.display = "flex"
    }
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
    cerrarModalPersonaje.addEventListener('click', () => {
        // Oculta el modal de personajes
        modalAvatares.style.display = "none"
        // Actualiza la bandera
        esModalAvatar = false
    })

    // ? Captura el click del boton para cambio de estado
    estadoBtn.addEventListener('click', () => {
        if (esModalCambioEstado) {
            // Oculta el modal de cambio de estado
            modalEstados.style.display = "none"
            esModalCambioEstado = false
        } else {
            // Muestra el modal de cambio de estado
            modalEstados.style.display = "grid"
            esModalCambioEstado = true
        }
    })

    cerrarModalEstados.addEventListener('click', () => {
        // Oculta el modal de cambio de estado
        modalEstados.style.display = "none"
        esModalCambioEstado = false
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
        consolaPersonajeTxt("CONSOLA")
        // Oculta el boton del menu de personajes
        btnMostrarModalPersonaje.style.display = "none"
        // Oculta los botones + y -
        if (esBtnMasMenos) mostrarBtnMasMenos()
        // Cierra el modal de personajes si está abierto
        if (esModalAvatar) cerrarModalPersonaje.click()
        // Cierra el modal de estados si está abierto  
        if (esModalCambioEstado) cerrarModalEstados.click()
    })

    // ? Captura el click de los botones mas y menos
    masBtn.addEventListener('click', () => {
        // Aumenta la vida actual del personaje
        masMenosVida("mas")
    })
    menosBtn.addEventListener('click', () => {
        // Disminuye la vida actual del personaje
        masMenosVida("menos")
    })
}

{ // * Helpers
    /**
     * Cambia el contenido de la consola de personajes
     * @param {string} txt - el texto nuevo
     */
    function consolaPersonajeTxt(txt) {
        textoConsolaPersonaje.textContent = txt
    }

    /**
     * Capitaliza la primera letra de una cadena
     * @param {string} palabra - La palabra a capitalizar
     * @returns {string} La palabra con la primera letra en mayúscula
     */
    function capitalizarPrimeraLetra(palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1)
    }
}