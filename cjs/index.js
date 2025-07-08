console.log("Hello, World!");

//variables globales
//console.log( typeof window)

//console.log(globalThis);   // globalThis es una variable global en toda nuestra aplicacion

// Importar el módulo suma
//const suma = require('./suma'); // Importar el módulo suma

// CommonsJS require Module 
const { suma } = require('./suma.js'); // Importar el módulo suma
//console.log(suma(2, 3)); // Llamar a la función suma
console.log(suma(2, 3));





