console.time("Todo");
let suma = 0;
console.time("Bucle");
for (let i = 0; i < 100000000; i++) {
    suma += 1;
}
console.timeEnd("Bucle")

let suma2 = 0;
console.time("Bucle 2");
for (let j = 0; j < 1000000000; j++) {
    suma2 += 1;
}
console.timeEnd("Bucle 2");


function asincrona() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Termina el proceso asíncrono");
            resolve()
        }, 1000)
    })
}

console.time("Asincrono");
asincrona()
    .then(() => {
        console.timeEnd("Asincrono");
    })

console.timeEnd("Todo");
