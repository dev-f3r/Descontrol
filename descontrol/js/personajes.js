const personajesDict = {
    "default": {
        nombre: "default",
        descripcion: "personaje sin descripción",
        imagen: "img/nuevopjico.png",
        ataque: 0,
        esquiva: 0,
        velocidad: 0,
        vida: 0,
        accion: 0,
    },
    "test1": {
        nombre: "test1",
        descripcion: "descripcion test1",
        imagen: "img/loboico.png",
        ataque: 6,
        esquiva: 5,
        velocidad: 4,
        vida: 18,
        accion: 2,
    },
    "test2": {
        nombre: "test2",
        descripcion: "descripcion test2",
        imagen: "img/esbirrosico.png",
        ataque: 5,
        esquiva: 4,
        velocidad: 3,
        vida: 18,
        accion: 1,
    },
    "test3": {
        nombre: "test3",
        descripcion: "descripcion test3",
        imagen: "img/magoico.png",
        ataque: 4,
        esquiva: 3,
        velocidad: 2,
        vida: 18,
        accion: 6,
    },

    "test4": {
        nombre: "test4",
        descripcion: "descripcion test4",
        imagen: "img/personajeico.png",
        ataque: 3,
        esquiva: 2,
        velocidad: 1,
        vida: 18,
        accion: 5,
    },

    "test5": {
        nombre: "test5",
        descripcion: "descripcion test5",
        imagen: "img/cazadorico.png",
        ataque: 2,
        esquiva: 1,
        velocidad: 6,
        vida: 18,
        accion: 4,
    },

    "test6": {
        nombre: "test6",
        descripcion: "descripcion test6",
        imagen: "img/protectorrunico.png",
        ataque: 1,
        esquiva: 3,
        velocidad: 5,
        vida: 18,
        accion: 3,
    },

    "test7": {
        nombre: "test7",
        descripcion: "descripcion test7",
        imagen: "img/tortaklaico.png",
        ataque: 4,
        esquiva: 2,
        velocidad: 6,
        vida: 18,
        accion: 1,
    },

    "test8": {
        nombre: "test8",
        descripcion: "descripcion test8",
        imagen: "img/nigromanteico.png",
        ataque: 3,
        esquiva: 6,
        velocidad: 2,
        vida: 18,
        accion: 4,
    },

    "test9": {
        nombre: "test9",
        descripcion: "descripcion test9",
        imagen: "img/paladinico.png",
        ataque: 5,
        esquiva: 3,
        velocidad: 4,
        vida: 18,
        accion: 2,
    },

    "test10": {
        nombre: "test10",
        descripcion: "descripcion test10",
        imagen: "img/chamanico.png",
        ataque: 2,
        esquiva: 5,
        velocidad: 3,
        vida: 18,
        accion: 6,
    },

    "test11": {
        nombre: "test11",
        descripcion: "descripcion test11",
        imagen: "img/guerreroico.png",
        ataque: 4,
        esquiva: 6,
        velocidad: 1,
        vida: 18,
        accion: 3,
    },
}



const estadosDict = {
    ebrio: {
        general: {
            nombre: "ebrio",
            imagen: "img/ebrio.png",
        },
        atributos: {
            ataque: 0,
            esquiva: -2,
            velocidad: -2,
            vida: -2,
            accion: 2,
        },
    },
    lucido: {
        general: {
            nombre: "lucido",
            imagen: "img/lucido.png",
        },
        atributos: {
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },
    },
    extaciado: {
        general: {
            nombre: "extaciado",
            imagen: "img/extaciado.png",
        },
        atributos: {
            ataque: 2,
            esquiva: 2,
            velocidad: 2,
            vida: 0,
            accion: -2,
        },
    }
}