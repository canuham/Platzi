function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log("hola,", nombre);
        miCallback(nombre); // le pasamos la vatiable al callback
    }, 1500)
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log("Adios", nombre);
        otroCallback();
    }, 1000);
}

// callback es una funcion que se lleva a una funcion

console.log("Iniciando proceso...");
hola("Camilo", function (nombre) { // recibimos la variable desde la funcion hola
    adios(nombre, function () {
        console.log("Terminando proceso...");
    });
});

//! en el siguiente caso como la funcion hola toma mas tiempo en ejecutarse, en este caso se despide primero y despues saluda

/* hola("Camilo", function () { });
adios("Camilo", function () { }); */ 