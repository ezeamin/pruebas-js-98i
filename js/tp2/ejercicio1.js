/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje
que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

// 1. Pedir el número (y parsearlo)
const edad = Number(prompt('Ingresá tu edad'));

// 2. Validar que la entrada sea un número
if (isNaN(edad)) {
  alert('No es un número');
} else {
  // 3. Si es un número, verificar si es legal

  if (edad >= 0 && edad < 100) {
    // edad en el rango válido
    if (edad >= 18) {
      alert('Puede conducir y embriagarse');
    } else {
      alert('No puede tomar, salí de acá');
    }
  } else {
    // edad en el rango inválido
    alert('Edad en rango erroneo');
  }
}
