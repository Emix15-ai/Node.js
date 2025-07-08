// .js -> por defecto utiliza CommonJS
// . mjs -> para utilizar ES Modules
// .cjs -> para utilizar CommonJS

import { suma, resta, multiplicacion } from './suma.mjs'; // Importar el módulo suma

console.log(suma(2, 3))
console.log(resta(2, 3))
console.log(multiplicacion(2, 2))
 // Llamar a la función suma