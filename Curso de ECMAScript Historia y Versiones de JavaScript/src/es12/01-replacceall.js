const string = "JavaScript es el mejor lenguaje. JavaScript puede vivir en el navegador y en el servidor.";

const replacedString = string.replace("JavaScript", "TypeScript"); // solo cambia la primera coincidencia
const replacedAllString = string.replaceAll("JavaScript", "TypeScript"); // cambia todas las coincidencias

console.log(replacedString);
console.log(replacedAllString);
