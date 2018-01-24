var theShuffle = rshuffle2("c1", "c2", "c3", "c4", "c5", "c6")
var theShuffle2 = rshuffle2("c1-2", "c2-2", "c3-2", "c4-2", "c5-2", "c6-2")


var shuffleSequence1 = seq("intro", sepWith("sep", seq("pracMsg", "sepStart1", "sepStart2", "sepStart3", "sepStart4", rshuffle2("practice"), "realMsg", "sepStart1", "sepStart2", "sepStart3", "sepStart4", theShuffle, "break", "sepStart1", "sepStart2", "sepStart3", "sepStart4", theShuffle2, "sr", "lastPage")));
var shuffleSequence2 = seq("intro", sepWith("sep", seq("pracMsg", "sepStart1", "sepStart2", "sepStart3", "sepStart4", rshuffle2("practice"), "realMsg", "sepStart1", "sepStart2", "sepStart3", "sepStart4", theShuffle2, "break", "sepStart1", "sepStart2", "sepStart3", "sepStart4", theShuffle, "sr", "lastPage")));

function chooseShuffle(){
   i = Math.floor(Math.random() * 2);
   console.log(i)

   if (i == 1) {
     return shuffleSequence1
   }
   else {
     return shuffleSequence2
   }
}

var shuffleSequence = chooseShuffle()

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
        as: [['z', 'la'], ['m', 'el']],
        presentHorizontally: true,
        timeout: 3000
    },
    "Message", {
        hideProgressBar: true,
        transfer: "click"
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
    ["sr", "__SendResults__", { }],

    ["sepStart1", "Separator", {normalMessage: "Empieza en...", transfer: 1000 }],
    ["sepStart2", "Separator", {normalMessage: "3...", transfer: 1000 }],
    ["sepStart3", "Separator", {normalMessage: "2...", transfer: 1000 }],
    ["sepStart4", "Separator", {normalMessage: "1...", transfer: 1000 }],

    ["sep", "Separator", { }],
    ["sep", "Separator", {normalMessage: "+"}],

    ["intro", "Message", {
      html: { include: "intro.html"}
    }],

    ["intro", "Form", {
      html: { include: "ConsentFormRevised.html"}
    }],
    ["intro", "Form", {
      html: { include: "questionnaire.html"}
    }],
    ["intro", "Form", {
      html: { include: "profTest1.html"}
    }],
    ["intro", "Form", {
      html: { include: "profTest2.html"}
    }],
    ["intro", "Form", {
      html: { include: "profTest3.html"}
    }],


    ["pracMsg", "Message", {html: {include: "instr1.html"}}],
    ["realMsg", "Message", {html: {include: "instr2.html"}}],
    ["break", "Message", {html: {include: "break.html"}}],
    ["lastPage", "Message", {html: {include: "lastPage.html"}}],

    ["practice", "Question", {hasCorrect: 1, q: "otoño"}],
    ["practice", "Question", {hasCorrect: 1, q: "postre"}],
    ["practice", "Question", {hasCorrect: 0, q: "almohada"}],
    ["practice", "Question", {hasCorrect: 0, q: "sartén"}],
    ["practice", "Question", {hasCorrect: 0, q: "coliflor"}],
    ["practice", "Question", {hasCorrect: 0, q: "ventaja"}],
    ["practice", "Question", {hasCorrect: 1, q: "apoyo"}],
    ["practice", "Question", {hasCorrect: 1, q: "pantalón"}],
    ["practice", "Question", {hasCorrect: 1, q: "nombre"}],
    ["practice", "Question", {hasCorrect: 1, q: "polvo"}],
    ["practice", "Question", {hasCorrect: 0, q: "bufanda"}],
    ["practice", "Question", {hasCorrect: 0, q: "profesión"}],

    ["c1", "Question", {hasCorrect: 1, q: "aeropuerto"}],
    ["c1-2", "Question", {hasCorrect: 1, q: "abrigo"}],
    ["c1", "Question", {hasCorrect: 1, q: "brazo"}],
    ["c1-2", "Question", {hasCorrect: 1, q: "anillo"}],
    ["c1", "Question", {hasCorrect: 1, q: "cepillo"}],
    ["c1-2", "Question", {hasCorrect: 1, q: "color"}],
    ["c1", "Question", {hasCorrect: 1, q: "desayuno"}],
    ["c1-2", "Question", {hasCorrect: 1, q: "cuchillo"}],
    ["c1", "Question", {hasCorrect: 1, q: "mes"}],
    ["c1-2", "Question", {hasCorrect: 1, q: "lago"}],
    ["c1", "Question", {hasCorrect: 1, q: "queso"}],
    ["c1-2", "Question", {hasCorrect: 1, q: "tamaño"}],
    ["c1", "Question", {hasCorrect: 1, q: "sombrero"}],
    ["c1-2", "Question", {hasCorrect: 1, q: "verano"}],
    ["c1", "Question", {hasCorrect: 1, q: "valle"}],
    ["c1-2", "Question", {hasCorrect: 1, q: "zapato"}],

    ["c2", "Question", {hasCorrect: 0, q: "botella"}],
    ["c2-2", "Question", {hasCorrect: 0, q: "calle"}],
    ["c2", "Question", {hasCorrect: 0, q: "camisa"}],
    ["c2-2", "Question", {hasCorrect: 0, q: "camiseta"}],
    ["c2", "Question", {hasCorrect: 0, q: "cuchara"}],
    ["c2-2", "Question", {hasCorrect: 0, q: "campana"}],
    ["c2", "Question", {hasCorrect: 0, q: "escalera"}],
    ["c2-2", "Question", {hasCorrect: 0, q: "flecha"}],
    ["c2", "Question", {hasCorrect: 0, q: "iglesia"}],
    ["c2-2", "Question", {hasCorrect: 0, q: "frontera"}],
    ["c2", "Question", {hasCorrect: 0, q: "leche"}],
    ["c2-2", "Question", {hasCorrect: 0, q: "mano"}],
    ["c2", "Question", {hasCorrect: 0, q: "semana"}],
    ["c2-2", "Question", {hasCorrect: 0, q: "pizarra"}],
    ["c2", "Question", {hasCorrect: 0, q: "uva"}],
    ["c2-2", "Question", {hasCorrect: 0, q: "zanahoria"}],

    ["c3", "Question", {hasCorrect: 0, q: "cebolla"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "bicicleta"}],
    ["c3", "Question", {hasCorrect: 0, q: "guerra"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "boca"}],
    ["c3", "Question", {hasCorrect: 0, q: "impresora"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "espalda"}],
    ["c3", "Question", {hasCorrect: 0, q: "llave"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "mochila"}],
    ["c3", "Question", {hasCorrect: 0, q: "luna"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "pared"}],
    ["c3", "Question", {hasCorrect: 0, q: "maleta"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "sombra"}],
    ["c3", "Question", {hasCorrect: 0, q: "piedra"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "tienda"}],
    ["c3", "Question", {hasCorrect: 0, q: "silla"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "voz"}],


    ["c4", "Question", {hasCorrect: 1, q: "abanico"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "bolso"}],
    ["c4", "Question", {hasCorrect: 1, q: "futuro"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "diente"}],
    ["c4", "Question", {hasCorrect: 1, q: "hombro"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "frío"}],
    ["c4", "Question", {hasCorrect: 1, q: "libro"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "jamón"}],
    ["c4", "Question", {hasCorrect: 1, q: "pasado"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "labio"}],
    ["c4", "Question", {hasCorrect: 1, q: "periódico"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "peso"}],
    ["c4", "Question", {hasCorrect: 1, q: "sueldo"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "pueblo"}],
    ["c4", "Question", {hasCorrect: 1, q: "tambor"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "río"}],


    ["c5", "Question", {hasCorrect: 1, q: "árbol"}],
    ["c5-2", "Question", {hasCorrect: 1, q: "año"}],
    ["c5", "Question", {hasCorrect: 1, q: "beso"}],
    ["c5-2", "Question", {hasCorrect: 1, q: "armario"}],
    ["c5", "Question", {hasCorrect: 1, q: "cinturón"}],
    ["c5-2", "Question", {hasCorrect: 1, q: "deseo"}],
    ["c5", "Question", {hasCorrect: 1, q: "escritorio"}],
    ["c5-2", "Question", {hasCorrect: 1, q: "frigorífico"}],
    ["c5", "Question", {hasCorrect: 1, q: "intento"}],
    ["c5-2", "Question", {hasCorrect: 1, q: "huevo"}],
    ["c5", "Question", {hasCorrect: 1, q: "oro"}],
    ["c5-2", "Question", {hasCorrect: 1, q: "suelo"}],
    ["c5", "Question", {hasCorrect: 1, q: "pegamento"}],
    ["c5-2", "Question", {hasCorrect: 1, q: "teclado"}],
    ["c5", "Question", {hasCorrect: 1, q: "pelo"}],
    ["c5-2", "Question", {hasCorrect: 1, q: "tren"}],


    ["c6", "Question", {hasCorrect: 0, q: "boda"}],
    ["c6-2", "Question", {hasCorrect: 0, q: "bandera"}],
    ["c6", "Question", {hasCorrect: 0, q: "carne"}],
    ["c6-2", "Question", {hasCorrect: 0, q: "cabeza"}],
    ["c6", "Question", {hasCorrect: 0, q: "falda"}],
    ["c6-2", "Question", {hasCorrect: 0, q: "cárcel"}],
    ["c6", "Question", {hasCorrect: 0, q: "fresa"}],
    ["c6-2", "Question", {hasCorrect: 0, q: "cocina"}],
    ["c6", "Question", {hasCorrect: 0, q: "oreja"}],
    ["c6-2", "Question", {hasCorrect: 0, q: "corbata"}],
    ["c6", "Question", {hasCorrect: 0, q: "piscina"}],
    ["c6-2", "Question", {hasCorrect: 0, q: "mesa"}],
    ["c6", "Question", {hasCorrect: 0, q: "sangre"}],
    ["c6-2", "Question", {hasCorrect: 0, q: "rodilla"}],
    ["c6", "Question", {hasCorrect: 0, q: "visita"}],
    ["c6-2", "Question", {hasCorrect: 0, q: "ventana"}]


];
