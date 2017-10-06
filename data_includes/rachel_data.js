var theShuffle = rshuffle("c1", "c2", "c3", "c4", "c5", "c6")

var shuffleSequence = seq("intro", "pracMsg", sepWith("sep", seq("practice", "realMsg", theShuffle)));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 500,
        normalMessage: "",
        ignoreFailure: true
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        randomOrder: false,
        as: [['f', 'el'], ['j', 'la']],
        presentHorizontally: true,
        timeout: 3000
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

//DID CHANGE TO VALUE OF CSS_INCLUDES_DIR in server_conf.py. Change this back to "css_includes" if messed up
var items = [

    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    //["sr", "__SendResults__", { }],

    ["sep", "Separator", { }],
    ["sep", "Separator", {normalMessage: "+"}],

    // ["intro", "Form", {
    //     html: { include: "example_intro.html" },
    //     validators: {
    //         age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
    //     }
    // } ],
    ["intro", "Form", {
      html: { include: "ConsentFormRevised.html"}
    }],
    ["intro", "Form", {
      html: { include: "HTMLformRevised.html"}
    }],


    ["pracMsg", "Message", {html: {include: "rachel.html"}, transfer: "keypress"}],
    ["realMsg", "Message", {html: {include: "rachel2.html"}, transfer: "keypress"}],

    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    //["setcounter", "__SetCounter__", { }],

    // NOTE: You could also use the 'Message' controller for the experiment intro (this provides a simple
    // consent checkbox).

    ["practice", "Question", {q: "WORD 1"}],
    ["practice", "Question", {q: "WORD 2"}],
    ["practice", "Question", {q: "WORD 3"}],
    ["practice", "Question", {q: "WORD 4"}],

    ["c1", "Question", {hasCorrect: 0, q: "abrigo"}],
    ["c1", "Question", {hasCorrect: 0, q: "aceite"}],
    ["c1", "Question", {hasCorrect: 0, q: "aeropuerto"}],
    ["c1", "Question", {hasCorrect: 0, q: "ajedrez"}],
    ["c1", "Question", {hasCorrect: 0, q: "ajo"}],
    ["c1", "Question", {hasCorrect: 0, q: "almuerzo"}],
    ["c1", "Question", {hasCorrect: 0, q: "amor"}],
    ["c1", "Question", {hasCorrect: 0, q: "año"}],
    ["c1", "Question", {hasCorrect: 0, q: "armario"}],
    ["c1", "Question", {hasCorrect: 0, q: "armario"}],
    ["c1", "Question", {hasCorrect: 0, q: "ascensor"}],
    ["c1", "Question", {hasCorrect: 0, q: "avión"}],
    ["c1", "Question", {hasCorrect: 0, q: "barco"}],
    ["c1", "Question", {hasCorrect: 0, q: "beso"}],
    ["c1", "Question", {hasCorrect: 0, q: "bosque"}],
    ["c1", "Question", {hasCorrect: 0, q: "brazo"}],
    ["c1", "Question", {hasCorrect: 0, q: "camión"}],
    ["c1", "Question", {hasCorrect: 0, q: "cerebro"}],
    ["c1", "Question", {hasCorrect: 0, q: "cielo"}],
    ["c1", "Question", {hasCorrect: 0, q: "cuchillo"}],
    ["c1", "Question", {hasCorrect: 0, q: "desayuno"}],
    ["c1", "Question", {hasCorrect: 0, q: "día"}],
    ["c1", "Question", {hasCorrect: 0, q: "diente"}],
    ["c1", "Question", {hasCorrect: 0, q: "dinero"}],
    ["c1", "Question", {hasCorrect: 0, q: "entrenamiento"}],
    ["c1", "Question", {hasCorrect: 0, q: "error"}],
    ["c1", "Question", {hasCorrect: 0, q: "escritorio"}],
    ["c1", "Question", {hasCorrect: 0, q: "espejo"}],
    ["c1", "Question", {hasCorrect: 0, q: "extranjero"}],
    ["c1", "Question", {hasCorrect: 0, q: "fregadero"}],

    ["c2", "Question", {hasCorrect: 1, q: "actividad"}],
    ["c2", "Question", {hasCorrect: 1, q: "agua"}],
    ["c2", "Question", {hasCorrect: 1, q: "almohada"}],
    ["c2", "Question", {hasCorrect: 1, q: "amistad"}],
    ["c2", "Question", {hasCorrect: 1, q: "aspiradora"}],
    ["c2", "Question", {hasCorrect: 1, q: "bandera"}],
    ["c2", "Question", {hasCorrect: 1, q: "bicicleta"}],
    ["c2", "Question", {hasCorrect: 1, q: "boca"}],
    ["c2", "Question", {hasCorrect: 1, q: "boda"}],
    ["c2", "Question", {hasCorrect: 1, q: "botella"}],
    ["c2", "Question", {hasCorrect: 1, q: "bufanda"}],
    ["c2", "Question", {hasCorrect: 1, q: "cama"}],
    ["c2", "Question", {hasCorrect: 1, q: "camisa"}],
    ["c2", "Question", {hasCorrect: 1, q: "cárcel"}],
    ["c2", "Question", {hasCorrect: 1, q: "cebolla"}],
    ["c2", "Question", {hasCorrect: 1, q: "cereza"}],
    ["c2", "Question", {hasCorrect: 1, q: "cerveza"}],
    ["c2", "Question", {hasCorrect: 1, q: "chaqueta"}],
    ["c2", "Question", {hasCorrect: 1, q: "charla"}],
    ["c2", "Question", {hasCorrect: 1, q: "ciencia"}],
    ["c2", "Question", {hasCorrect: 1, q: "ciruela"}],
    ["c2", "Question", {hasCorrect: 1, q: "cocina"}],
    ["c2", "Question", {hasCorrect: 1, q: "coliflor"}],
    ["c2", "Question", {hasCorrect: 1, q: "cooperación"}],
    ["c2", "Question", {hasCorrect: 1, q: "defensa"}],
    ["c2", "Question", {hasCorrect: 1, q: "duda"}],
    ["c2", "Question", {hasCorrect: 1, q: "escalera"}],
    ["c2", "Question", {hasCorrect: 1, q: "escuela"}],
    ["c2", "Question", {hasCorrect: 1, q: "esperanza"}],
    ["c2", "Question", {hasCorrect: 1, q: "estantería"}],

    ["c3", "Question", {hasCorrect: 0, q: "frigorífico"}],
    ["c3", "Question", {hasCorrect: 0, q: "gofre"}],
    ["c3", "Question", {hasCorrect: 0, q: "helado"}],
    ["c3", "Question", {hasCorrect: 0, q: "hombro"}],
    ["c3", "Question", {hasCorrect: 0, q: "horno"}],
    ["c3", "Question", {hasCorrect: 0, q: "hospital"}],
    ["c3", "Question", {hasCorrect: 0, q: "informe"}],
    ["c3", "Question", {hasCorrect: 0, q: "intento"}],
    ["c3", "Question", {hasCorrect: 0, q: "invierno"}],
    ["c3", "Question", {hasCorrect: 0, q: "jabón"}],
    ["c3", "Question", {hasCorrect: 0, q: "jardín"}],
    ["c3", "Question", {hasCorrect: 0, q: "labio"}],
    ["c3", "Question", {hasCorrect: 0, q: "lago"}],
    ["c3", "Question", {hasCorrect: 0, q: "lápiz"}],
    ["c3", "Question", {hasCorrect: 0, q: "libro"}],
    ["c3", "Question", {hasCorrect: 0, q: "limón"}],
    ["c3", "Question", {hasCorrect: 0, q: "maquillaje"}],
    ["c3", "Question", {hasCorrect: 0, q: "melocotón"}],
    ["c3", "Question", {hasCorrect: 0, q: "mes"}],
    ["c3", "Question", {hasCorrect: 0, q: "momento"}],
    ["c3", "Question", {hasCorrect: 0, q: "nombre"}],
    ["c3", "Question", {hasCorrect: 0, q: "ordenador"}],
    ["c3", "Question", {hasCorrect: 0, q: "oro"}],
    ["c3", "Question", {hasCorrect: 0, q: "otoño"}],
    ["c3", "Question", {hasCorrect: 0, q: "país"}],
    ["c3", "Question", {hasCorrect: 0, q: "pan"}],
    ["c3", "Question", {hasCorrect: 0, q: "pantalón"}],
    ["c3", "Question", {hasCorrect: 0, q: "pasado"}],
    ["c3", "Question", {hasCorrect: 0, q: "peligro"}],
    ["c3", "Question", {hasCorrect: 0, q: "pelo"}],

    ["c4", "Question", {hasCorrect: 1, q: "estrella"}],
    ["c4", "Question", {hasCorrect: 1, q: "experiencia"}],
    ["c4", "Question", {hasCorrect: 1, q: "explicación"}],
    ["c4", "Question", {hasCorrect: 1, q: "falda"}],
    ["c4", "Question", {hasCorrect: 1, q: "fila"}],
    ["c4", "Question", {hasCorrect: 1, q: "flecha"}],
    ["c4", "Question", {hasCorrect: 1, q: "fresa"}],
    ["c4", "Question", {hasCorrect: 1, q: "fuerza"}],
    ["c4", "Question", {hasCorrect: 1, q: "gasolina"}],
    ["c4", "Question", {hasCorrect: 1, q: "guerra"}],
    ["c4", "Question", {hasCorrect: 1, q: "habitación"}],
    ["c4", "Question", {hasCorrect: 1, q: "hambre"}],
    ["c4", "Question", {hasCorrect: 1, q: "iglesia"}],
    ["c4", "Question", {hasCorrect: 1, q: "impresora"}],
    ["c4", "Question", {hasCorrect: 1, q: "leche"}],
    ["c4", "Question", {hasCorrect: 1, q: "lluvia"}],
    ["c4", "Question", {hasCorrect: 1, q: "mano"}],
    ["c4", "Question", {hasCorrect: 1, q: "manzana"}],
    ["c4", "Question", {hasCorrect: 1, q: "mayoría"}],
    ["c4", "Question", {hasCorrect: 1, q: "mejilla"}],
    ["c4", "Question", {hasCorrect: 1, q: "naranja"}],
    ["c4", "Question", {hasCorrect: 1, q: "nariz"}],
    ["c4", "Question", {hasCorrect: 1, q: "nieve"}],
    ["c4", "Question", {hasCorrect: 1, q: "oferta"}],
    ["c4", "Question", {hasCorrect: 1, q: "oficina"}],
    ["c4", "Question", {hasCorrect: 1, q: "olla"}],
    ["c4", "Question", {hasCorrect: 1, q: "página"}],
    ["c4", "Question", {hasCorrect: 1, q: "palabra"}],
    ["c4", "Question", {hasCorrect: 1, q: "pared"}],
    ["c4", "Question", {hasCorrect: 1, q: "paz"}],

    ["c5", "Question", {hasCorrect: 0, q: "pie"}],
    ["c5", "Question", {hasCorrect: 0, q: "polvo"}],
    ["c5", "Question", {hasCorrect: 0, q: "postre"}],
    ["c5", "Question", {hasCorrect: 0, q: "prestámo"}],
    ["c5", "Question", {hasCorrect: 0, q: "puente"}],
    ["c5", "Question", {hasCorrect: 0, q: "puerto"}],
    ["c5", "Question", {hasCorrect: 0, q: "queso"}],
    ["c5", "Question", {hasCorrect: 0, q: "río"}],
    ["c5", "Question", {hasCorrect: 0, q: "secreto"}],
    ["c5", "Question", {hasCorrect: 0, q: "sendero"}],
    ["c5", "Question", {hasCorrect: 0, q: "significado"}],
    ["c5", "Question", {hasCorrect: 0, q: "sillón"}],
    ["c5", "Question", {hasCorrect: 0, q: "sombrero"}],
    ["c5", "Question", {hasCorrect: 0, q: "sótano"}],
    ["c5", "Question", {hasCorrect: 0, q: "sueldo"}],
    ["c5", "Question", {hasCorrect: 0, q: "suelo"}],
    ["c5", "Question", {hasCorrect: 0, q: "tambor"}],
    ["c5", "Question", {hasCorrect: 0, q: "teclado"}],
    ["c5", "Question", {hasCorrect: 0, q: "tenedor"}],
    ["c5", "Question", {hasCorrect: 0, q: "tratamiento"}],
    ["c5", "Question", {hasCorrect: 0, q: "valle"}],
    ["c5", "Question", {hasCorrect: 0, q: "verano"}],
    ["c5", "Question", {hasCorrect: 0, q: "zapato"}],
    ["c5", "Question", {hasCorrect: 1, q: "ventaja"}],
    ["c5", "Question", {hasCorrect: 1, q: "ventana"}],
    ["c5", "Question", {hasCorrect: 1, q: "vida"}],
    ["c5", "Question", {hasCorrect: 1, q: "visita"}],
    ["c5", "Question", {hasCorrect: 1, q: "vivienda"}],
    ["c5", "Question", {hasCorrect: 1, q: "zanahoria"}],
    ["c5", "Question", {hasCorrect: 0, q: "sol"}],

    ["c6", "Question", {hasCorrect: 1, q: "película"}],
    ["c6", "Question", {hasCorrect: 1, q: "pérdida"}],
    ["c6", "Question", {hasCorrect: 1, q: "pierna"}],
    ["c6", "Question", {hasCorrect: 1, q: "piña"}],
    ["c6", "Question", {hasCorrect: 1, q: "playa"}],
    ["c6", "Question", {hasCorrect: 1, q: "posibilidad"}],
    ["c6", "Question", {hasCorrect: 1, q: "pregunta"}],
    ["c6", "Question", {hasCorrect: 1, q: "propuesta"}],
    ["c6", "Question", {hasCorrect: 1, q: "responsabilidad"}],
    ["c6", "Question", {hasCorrect: 1, q: "respuesta"}],
    ["c6", "Question", {hasCorrect: 1, q: "risa"}],
    ["c6", "Question", {hasCorrect: 1, q: "rodilla"}],
    ["c6", "Question", {hasCorrect: 1, q: "salchicha"}],
    ["c6", "Question", {hasCorrect: 1, q: "sangre"}],
    ["c6", "Question", {hasCorrect: 1, q: "sartén"}],
    ["c6", "Question", {hasCorrect: 1, q: "semana"}],
    ["c6", "Question", {hasCorrect: 1, q: "sensación"}],
    ["c6", "Question", {hasCorrect: 1, q: "silla"}],
    ["c6", "Question", {hasCorrect: 1, q: "sociedad"}],
    ["c6", "Question", {hasCorrect: 1, q: "solución"}],
    ["c6", "Question", {hasCorrect: 1, q: "sombra"}],
    ["c6", "Question", {hasCorrect: 1, q: "sonrisa"}],
    ["c6", "Question", {hasCorrect: 1, q: "tarde"}],
    ["c6", "Question", {hasCorrect: 1, q: "taza"}],
    ["c6", "Question", {hasCorrect: 1, q: "temporada"}],
    ["c6", "Question", {hasCorrect: 1, q: "tienda"}],
    ["c6", "Question", {hasCorrect: 1, q: "tierra"}],
    ["c6", "Question", {hasCorrect: 1, q: "uña"}],
    ["c6", "Question", {hasCorrect: 1, q: "uva"}],
    ["c6", "Question", {hasCorrect: 1, q: "venta"}]


];
