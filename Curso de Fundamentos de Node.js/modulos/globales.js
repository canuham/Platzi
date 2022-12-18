let i = 0;
let intervalo = setInterval(() => {
    console.log("Hola");
    if (i === 3) {
        clearInterval(intervalo) // Sale del intervalo
    }
    i++;
}, 1000);

setImmediate(function () { // Ejecuta esta funcion de inmediato
    console.log("Hola");
})

//require()

console.log(process);

console.log(__dirname); // Path de la carpeta
console.log(__filename); // Path del archivo

//! Evitar usar variables globales

global.miVariable = "elValor";

console.log(miVariable);
