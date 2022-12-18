var tabla = [
    { a: 1, b: "Z" },
    { a: 2, b: "Otra" }
]

console.log("log");
console.info("info"); // Info para se ejecuto esto o asi
console.error("error"); // Mostrar errores
console.warn("warn"); // Mostrar advertendias

//? Ver la diferencia
console.log(tabla, "Ver la diferencia");
console.table(tabla);

// Indenta los logs en grupos
console.group("Conversacion:")
console.log("Hola");
console.group("bla");
console.log("Blablabla");
console.log("Blablabla");
console.log("Blablabla");
console.groupEnd("bla");
console.log("Adios");
console.groupEnd("conver");

console.log("Otra cosa de otra funcion");

function function1() {
    console.group("funcion 1");
    console.log("Esto es de la funcion 1");
    console.log("Esto tambien");
    console.log("Esto tambien");
    function2();
    console.log("He vuelto a la 1");
    console.groupEnd("funcion 1");
}

function function2() {
    console.group("funcion 2");
    console.log("Ahora estamos en la funcion 2");
    console.groupEnd("funcion 2");
}

console.log("Empezamos");
function1();

// maneja el solo un contador
console.count("veces");
console.count("veces");
console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");