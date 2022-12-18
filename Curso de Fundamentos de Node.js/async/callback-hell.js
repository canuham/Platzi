function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log("hola,", nombre);
        miCallback(nombre);
    }, 1500)
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log("Bla bla bla bla bla...");
        callbackHablar();
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log("Adios", nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) { // Usamos recursividad
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback)
        });
    } else {
        adios(nombre, callback)
    }

}


// --

//? La siguiente es una funcion recursiva, evita nuestro callback-hell y le da igual si se hace 3 veces o 300 veces

console.log("Iniciando proceso...");
hola("Camilo", function (nombre) {
    conversacion(nombre, 3, function () {
        console.log("proceso terminado");
    });
})

//? Lo sieguiente es un callback-hell ya se hace dificil entender que pasa con tan solo 3 veces que se llama a hablar, ahora imagina hacerlo 300 veces
/* hola("Camilo", function (nombre) {
    hablar(function () {
        hablar(function () {
            hablar(function () {
                adios(nombre, function () {
                    console.log("Terminando proceso...");
                });
            });
        });
    })

}); */

/* COMO EVITAR EL CALLBACK-HELL

        1. Trabajar con funciones y no hacer el codigo en el callback
        2. Cuando trabajemos con callbacks muy complejos debemos usar funciones intermedias que crean funcionalidades especificas, por ejemplo en vez de tener tantas veces llamado la funcion hablar, podriamos crear una llamada conversación
*/
