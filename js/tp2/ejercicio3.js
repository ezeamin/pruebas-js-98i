/*
3- Realiza un script que pida cadenas de texto 
hasta que se pulse “cancelar”. Al salir con
“cancelar” deben mostrarse todas las
cadenas concatenadas con un guión -.
*/

// 1. Pedir la cadena de texto (prompt)
// 2. Verificar si es "cancelar" = null
// 3. Si tocó cancelar, terminar la ejecución, sino
// repetir hasta que toque cancelar

let chistes = '';

do {
  let texto = prompt('Ingresá tu mejor chiste');

  if (texto === null) {
    // Terminar programa
    break;
  }

  chistes += `-${texto}`; // chistes = chistes + `-${texto}`
  alert(`Tu chiste fue ${texto}`);
} while (true);

// salta acá después del break
alert(`Tus chistes fueron ${chistes}`);
