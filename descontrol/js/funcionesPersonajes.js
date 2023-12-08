/**
 * ? Muestra los datos del personaje actual incluyendo imagen, atributos
 * y descripción.
 */
function mostrarPersonaje() {
    const atributos = ["ataque", "esquiva", "velocidad", "vida", "accion"]
    // Recorre las claves de atributo definidas
    // y actualiza los elementos de la UI
    atributos.forEach(key => {
        // Establece el valor del indicador 
        // al valor del atributo del personaje
        document.getElementById(`${key}Indicador`).textContent = personaje[key]
    })

    // Establece la imagen del personaje basado en la propiedad personaje.imagen
    imgPersonaje.src = personaje.imagen
}

/**
 * ? Cambia el personaje actual por otro
 * @param {string} nombre - nombre del nuevo personaje
 */
function cambiarPersonaje(nombre) {
    // Verifica si personaje está definido
    if (!personaje) personaje = {}
    // Asigna las propiedades del nuevo personaje 
    Object.assign(personaje, personajesDict[nombre])
}

/**
 * Modifica la vida del personaje actual sumando o restando 1 punto
 * @param {string} accion - "mas" para sumar vida, "menos" para restar vida
 */
function masMenosVida(accion) {
    // Verifica si se debe sumar o restar vida
    if (accion == "mas") {
        // Suma vida si está por debajo del máximo
        if (personaje.vida < 18) personaje.vida += 1
    } else {
        // Resta vida si está por encima del mínimo
        if (personaje.vida >= 1) personaje.vida -= 1
    }
    // Actualiza la UI
    mostrarPersonaje()
    // Muestra el nuevo valor de vida
    consolaPersonajeTxt(`Vida: ${personaje.vida}`)
}

/**
 * Muestra la descripcion de un atributo del personaje
 * @param {string} nombre - nombre del atributo
 */
function descripcionAtributo(nombre) {
    consolaPersonajeTxt(`${capitalizarPrimeraLetra(nombre)}: ${personaje[nombre]}`)
}

// * Identificadores de cada personaje del menu correspondiente
const idBtnPersonaje = Object.keys(personajesDict)
// Recorre cada identificador y les agrega un evento
idBtnPersonaje.forEach(id => {
    // ? Captura el click de un personaje a elegir
    document.getElementById(id).addEventListener('click', () => {
        // Cambia el personaje actual
        cambiarPersonaje(id)
        // Lo muestra
        mostrarPersonaje()
        // Cierra el modal
        cerrarModalPersonaje.click()
        // Limpia la consola
        textoConsolaPersonaje.click()
        // Muestra la descripcion del personaje
        consolaPersonajeTxt(personaje.descripcion)
    })
})

// * Atributos
// Itera sobre los identificadores de los botones de atributos
const idBtnAtributo = ["ataque", "esquiva", "velocidad", "vida", "accion"]
// Agrega un manejador de eventos a cada botón de atributo
idBtnAtributo.forEach(id => {
    // Captura el click del botón de atributo
    document.getElementById(`${id}Btn`).addEventListener('click', () => {
        // Limpia la consola
        consolaPersonaje.click()

        // Si hay un personaje seleccionado
        if (personaje) {
            // Si el atributo no es vida, muestra su descripción  
            if (id !== "vida") {
                if (esBtnMasMenos) mostrarOcultarBtnMasMenos() // Si los botones + y - se estan mostrando los oculta
                descripcionAtributo(id)
            }
            // Si el atributo es vida, muestra los botones más/menos
            else {
                consolaPersonajeTxt(`Vida: ${personaje.vida}`)
                mostrarOcultarBtnMasMenos() // Muestra los botones apenas se activan
            }
        }
        // Si no hay personaje seleccionado, muestra mensaje
        else consolaPersonajeTxt("No hay personaje actual")
    })
})