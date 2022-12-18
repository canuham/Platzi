
process.on('beforeExit', () => {
    console.log("El proceso va a terminar");

});

process.on('exit', () => {
    console.log("Ale, el proceso acabó");
    setTimeout(() => { // Aqui ya nos desconectamos del event loop
        console.log("Esto no se va a ver nunca");
    }, 0)
});

setTimeout(() => {
    console.log("Esto si se va a ver nunca");
}, 0)

process.on('uncaughtException', (err, origen) => {
    console.error("Vaya se nos ha olvidado capturar un error");
    setTimeout(() => {
        console.log("Esto viene desde las excepciones");
    }, 0)
    console.error(err);
})
// process.on('unhandledRejection') // Para promesas que tienen rejection y nadie las ha capturado

funcionQueNoExiste();

console.log("Esto si el error no se recoje, no sale");