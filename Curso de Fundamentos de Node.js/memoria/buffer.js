// let buffer = Buffer.alloc(4); // Guardamos n bites de informacion
// let buffer = Buffer.from([1, 2, 3]); // guardamos datos en el buffer = <Buffer 01 02 03>

let buffer = Buffer.from("Hola");

// console.log(buffer);

// --

// Creacion de abecedario

let abc = Buffer.alloc(26);

console.log(abc);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}

console.log(abc.toString());
