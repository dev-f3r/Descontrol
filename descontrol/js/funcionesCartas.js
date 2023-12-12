/**
 * ? Muestra los datos de la carta actual
 */
function mostrarCarta() {
    // Imagen de la carta
    imgCarta.src = carta.imagen
    // Descripcion
    consolaCartaTxt(carta.descripcion)
}

/**
 * ? Cambia la carta actual
 */
function levantarCarta() {
    // Genera un numero aleatorio entre 1 y 9 
    let dado = Math.floor(Math.random() * 9) + 1
    // Suma la acción del personaje al valor del dado
    dado += personaje.accion

    // Define variables para el tipo y mazo de cartas
    let tipo = ""
    let maso = null

    // Verifica el valor del dado para asignar el tipo y mazo de cartas
    if (dado <= 6) {
        // Cartas normales
        maso = listaCartasNormales
        tipo = "normales"
    } else if (dado <= 9) {
        // Cartas especiales
        maso = listaCartasEspeciales
        tipo = "especiales"
    } else {
        // Cartas épicas
        maso = listaCartasEpicas
        tipo = "epicas"
    }

    // Obtiene un indice aleatorio del mazo 
    let indice = Math.floor(Math.random() * maso.length)

    // Inicializa la carta actual si no existe
    if (!carta) carta = {}

    // Asigna las propiedades de la carta elegida
    Object.assign(carta, cartasDict[tipo][maso[indice]])
}