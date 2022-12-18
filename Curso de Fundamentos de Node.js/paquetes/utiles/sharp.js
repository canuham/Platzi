const sharp = require('sharp');

sharp("./original.png")
    .resize(80) // cambiar el tamaño
    .grayscale() // poner en escala de grises
    .toFile("resized.png");