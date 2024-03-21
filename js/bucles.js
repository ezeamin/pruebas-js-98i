// Suma los números del 1 al 1000

// 1. Declarar un iterador
// 2. Declarar la condicion de corte
// 3. Ejecutar la lógica
// 4. Aumentar en 1 el iterador

// console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10);

// 1. ESTRUCTURA WHILE
// let i = 0; // Iterador (1 en 1)
// let suma = 0; // Acumulador

// while (i <= 1000) {
//   suma = suma + i; // Suma
//   i = i + 1; // Aumentar el iterador
// }

// console.log(suma);

// ESTRUCTURA FOR
// for(iterador;condicion;aumento del iterador)

// let suma = 0;

// for (let i = 0; i <= 10; i++) {
//   suma += i; // suma = suma + i;
// }

// console.log(suma);

// ESTRUCTURA DO WHILE
// Muy parecida al while, PERO se ejecuta siempre,
// al menos, 1 vez

let i = 0;
let suma = 0;

do {
  suma += i;
  i++;
} while (i <= 1000);

console.log(suma);
