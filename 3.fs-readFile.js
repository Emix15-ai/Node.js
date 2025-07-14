const fs = require("node:fs");

console.log("Leyendo el primer archivo ...");
fs.readFile("./archivo.txt", "utf-8", (err, text) => { // este es el callback que se ejecuta al leer el archivo
  console.log('primer texto:', text);
});

console.log("hola xime");

console.log("Leyendo el segundo archivo ...");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  console.log('Segundo texto:', text);
});
