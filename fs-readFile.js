const fs = require('node:fs')

console.log('Leyendo el primer archivo ...')
const text = fs.readFileSync('./archivo.txt', 'utf-8'); // Leemos el archivo de forma síncrona
console.log(text); // Mostramos el contenido del archivo


console.log('Leyendo el segundo archivo ...')
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8'); // Leemos el segundo archivo de forma síncrona
console.log(text2); // Mostramos el contenido del segundo archivo