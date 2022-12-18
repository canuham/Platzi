const os = require('os');

console.log(os.arch()); // Acceder a la arquitectura del os
console.log(os.platform()); // Nos dice si estamos en windows, win32, linux, android, etc...
console.log(os.cpus()); // nos muestra los nucleos de la cpu
console.log(os.cpus().length); // cantidad de cores
console.log(os.constants); // Todas las señales, prioridades, errores del sistema
console.log(os.freemem()); // En bytes la memoria libre que tenemos


const SIZE = 1024
function kb(bytes) { return bytes / SIZE }

function mb(bytes) { return kb(bytes) / SIZE }

function gb(bytes) { return mb(bytes) / SIZE }


console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));// memoria libre disponible
console.log(gb(os.totalmem())); // memoria total disponible

console.log(os.homedir()); // direccion home del usuario
console.log(os.tmpdir()); // direccion de archivos temporales

console.log(os.hostname()); // saber el nombre del host de la maquina
console.log(os.networkInterfaces()); // trae todas las interfaces de red en la maquina