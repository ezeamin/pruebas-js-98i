let nombreInicial = 'Lucila';
let nombresChicos = ['Eze', 'Jose'];
let nombresChicas = ['Anabela', nombreInicial];
// let edades = [26, 28, null]
let nombres = [];

console.log(nombres);
// console.log(edades)

//----- Mostrar el elemento según su posición -----
// console.log(nombres[1]);

//----- agregar el ultimo -----
nombres.push('Nahuel');

//----- eliminar el ultimo -----
nombres.pop();

//----- agregar al comienzo del arreglo -----
nombres.unshift('Nahuel');

//----- elimiar el primero -----
nombres.shift();

// console.log(nombres)

//----- devuelve el numero de la posicion / -1 si no existe -----
let index = nombres.indexOf('Nahuel');
// console.log(index)

//----- Elimina elementos (posicion, cantidad a eliminar, elemento a agregar) -----
// nombres.splice(1,2,"Paula", "Nahuel")
// let nombresEliminados = nombres.splice(1,2)
// console.log(nombresEliminados)
// console.log(nombres)

//----- verifica si existe el elemento en el arreglo -----
console.log(nombres.includes('Paula'));

//----- Une ambos arreglos en un arreglo nuevo -----
nombres = nombresChicas.concat(nombresChicos);
console.log(nombres);

//----- Transforma el arreglo a String -----
console.log(nombres.join());

// 1. Imprimir los elementos de un arreglo por consola

const arreglo = ['🍔', '🍟', '🥤', '🥓'];

arreglo.forEach((elemento, index) => {
  console.log(`${index + 1} - ${elemento}`);
});

const numeros = [1, 2, 3, 4, 5];

const nuevoArreglo = numeros.map((elemento) => {
  return elemento * 2;
});

console.log(arreglo);
console.log(nuevoArreglo);

const encontrados = numeros.filter((elemento) => {
  return elemento > 3;
});

// Métodos con callbacks -> .filter, .find, .map, .forEach

// const hayMayor = numeros.includes(4)
// console.log("🚀 ~ hayMayor:", hayMayor)

console.log(encontrados)

// .map, .includes, .find

// for (let i = 0; i < arreglo.length; i++) {
//   const elemento = arreglo[i];
//   console.log(elemento);
// }

// for (let i = 0; i < arreglo.length; i++) {
//   let elemento = arreglo[i];
//   elemento += "-comida";
//   console.log(elemento)
// }

// function recorrerArreglo(arreglo, callback) {
//   for (let i = 0; i < arreglo.length; i++) {
//     let elemento = arreglo[i];
//     callback(elemento, i); // -> accion que cambia
//   }
// }

// Funciones anónimas

// recorrerArreglo(arreglo, (elemento, index) => {
//   console.log(`${index + 1} - ${elemento}`);
// });
