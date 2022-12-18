let nombre = process.env.NOMBRE || "Sin nombre";
let web = process.env.WEB || "no tengo web";

console.log("Hola " + nombre);
console.log("Mi web es " + web);

// decirle a node js desde fuera del codigo cual es la variable

// En la terminal:
// NOMBRE=Camilo conceptos/entorno.js
// NOMBRE=Camilo WEB=Caraham.com node conceptos/entorno.js