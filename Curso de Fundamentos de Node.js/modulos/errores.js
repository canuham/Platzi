function otraFuncion() {
    seRompe()
}

function seRompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (error) {
            console.error("Error en mi función asíncrona");
            cb(error)
        }
    }, 1000);
}

function seRompeAsincrona2() {
    setTimeout(() => {
        return 3 + z;
    }, 1000);
}


// seRompe(); // detiene la ejecución del codigo

// Cada que sepamos que una funcion puede romperse vamos a meterla dentro de un try/catch

try {
    otraFuncion(); // se puede captar el error incluso cuando lo llama otra funcion, no hay que anidar try/catch, da igual tener 2 que 200 funciones
    seRompeAsincrona2(); // La funcion asincrona no se ejecuta en nuestro hilo por eso se crashea, en este caso debemos meter el try/catch dentro de la funcion asincrona
    seRompeAsincrona(function (err) {
        console.log("Hay error"); // Se maneja el error de la funcion asincrona
        console.error(err.message);
    });
} catch (error) {
    console.error("Vaya, algo se ha roto..."); // El codigo sigue funcionando y no se paran los procesos
    console.error(error.message); // Me explica el porque, pero no se para como arriba
    console.log("Pero no pasa nada, lo hemos capturado");
}

console.log("Esto de aqui está al final");