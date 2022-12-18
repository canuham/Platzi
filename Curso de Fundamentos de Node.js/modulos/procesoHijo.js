const { exec, spawn } = require('child_process');

exec("dir", (err, stdout, sterr) => {  // Ejecutar comandos de windows/linux
    if (err) {
        console.error(err);
        return false;
    }

    console.log(stdout);
})

exec("node modulos/consola.js", (err, stdout, sterr) => {  // Ejecutar codigo
    if (err) {
        console.error(err);
        return false;
    }

    console.log(stdout);
})

let proceso = spawn("dir", []);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function (dato) {
    console.log("Esta muerto?");
    console.log(proceso.killed);
    console.log(dato.toString());
})

proceso.on('exit', function () {
    console.log("El proceso terminó");
})

proceso.on('close', function () {
    console.log(proceso.killed);
})