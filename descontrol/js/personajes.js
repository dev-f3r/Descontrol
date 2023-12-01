class Personaje {
    constructor({
        nombre = "",
        descripcion = "",
        imagen = "",
        ataque = 0,
        esquiva = 0,
        velocidad = 0,
        vida = 0,
        accion = 0,
    }) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.imagen = imagen
        this.ataque = ataque
        this.esquiva = esquiva
        this.velocidad = velocidad
        this.vida = vida
        this.accion = accion
    }

    modificarAtributos(obj) {
        for (const key in obj.general) {
            this[key] = obj[key]
        }
        for (const key in obj.atributos) {
            if (key in this) {
                this[key] += obj[key]
            }
        }
    }
}

const personajesDict = {
    "default": {
        general: {
            nombre: "default",
            descripcion: "personaje sin descripción",
            imagen: "img/nuevopjico.png",
        },
        atributos: {
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },
    },
    "test 1": {
        general: {
            nombre: "test 1",
            descripcion: "descripcion test 1",
            imagen: "img/nuevopjico.png",
        },
        atributos: {
            ataque: 6,
            esquiva: 6,
            velocidad: 6,
            vida: 18,
            accion: 6,
        },
    },
    "test 2": {
        general: {
            nombre: "test 2",
            descripcion: "descripcion test 2",
            imagen: "img/nada.png",
        },
        atributos: {
            ataque: 3,
            esquiva: 3,
            velocidad: 3,
            vida: 9,
            accion: 3,
        },
    },
    "test 3": {
        general: {
            nombre: "test 3",
            descripcion: "descripcion test 3",
            imagen: "img/nada.png",
        },
        atributos: {
            ataque: 3,
            esquiva: 3,
            velocidad: 3,
            vida: 9,
            accion: 3,
        },
    },
}

let listaPersonajes = []
for (const key in personajesDict) {
    if (key != "default") listaPersonajes.push(new Personaje({ ...personajesDict[key].general, ...personajesDict[key].atributos }))
}