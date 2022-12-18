function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("hola,", nombre);
            resolve(nombre);
        }, 1500);
    });

}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Bla bla bla bla bla...");
            resolve(nombre);
        }, 1000);
    })

}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Adios", nombre);
            resolve();
        }, 1000);
    })

}

// --

//? Notar la diferencia entre esto y el archivo "./callback-hell.js"

console.log("Iniciando el proceso...");
hola("Camilo")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log("Terminado el proceso.");
    })
    .catch(error => {
        console.error("Ha habido un error:");
        console.error(error);
    }) // Se asegura de que todo lo que pase aqui no falle y en caso de que falle ejecutar lo que tenga que pasar 

