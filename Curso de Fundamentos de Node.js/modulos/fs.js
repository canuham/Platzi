const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        //Leido
        cb(data.toString());
    })
};

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.log("No he podido escribirlo", err);
        } else {
            console.log("Se ha escrito correctamente");
        }
    })
};

function borrar(ruta, cb) {
    fs.unlink(ruta, cb)
}

leer(__dirname + "/archivo.txt", console.log);
escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo", console.log)
/* borrar(__dirname + "/archivo1.txt", console.log) */