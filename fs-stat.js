const fs = require ('node:fs')  // A partir de Node 16, se recomienda poner node: antes del módulo

const stats = fs.statSync('./archivo.txt'); // Obtenemos el estado del archivo
console.log(
    stats.isFile(), // Verificamos si es un archivo
    stats.isDirectory(), // Verificamos si es un directorio
    stats.isSymbolicLink(), // Verificamos si es un enlace simbólico
    stats.size, 'bytes', // Tamaño del archivo en bytes
    );