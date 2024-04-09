/*
Escribir un programa que permita al usuario gestionar una lista de tareas. El programa debe tener las siguientes funcionalidades:

1. Agregar tarea: Permite al usuario ingresar una tarea y la agrega a la lista de tareas.
2. Listar tareas: Muestra al usuario todas las tareas actualmente en la lista.
3. Eliminar tarea: Permite al usuario eliminar una tarea específica de la lista usando el numero de tarea.
4. Salir: Termina la ejecución del programa.

Usar funciones donde corresponda. Para mostrar los mensajes y pedir valores, utilizar alerts y prompts. Realizar las validaciones necesarias.
*/


const tareas = [];

const agregarTarea = () => {
  while (true) {
    const tarea = prompt('Ingrese la tarea');

    if (tarea === null || tarea.trim() === '') {
      alert('Ingrese una tarea válida');
      continue;
    }

    tareas.push(tarea);
    break;
  }
};

const obtenerListado = () => {
  let texto = '';
  tareas.forEach((tarea, index) => {
    texto += `${index + 1}. ${tarea}\n`;
  });
  return texto;
};

const listarTareas = () => {
  let texto = obtenerListado();
  alert(texto);
};

const eliminarTarea = () => {
  while (true) {
    const indice = prompt(
      `Ingrese el número de la tarea a eliminar: \n${obtenerListado()}`
    );

    if (indice === null || indice.trim() === '') {
      alert('Ingrese un número de tarea válido');
      continue;
    }

    const numero = parseInt(indice, 10);
    if (isNaN(numero) || numero < 1 || numero > tareas.length) {
      alert('Ingrese un número de tarea válido');
      continue;
    }

    tareas.splice(numero - 1, 1);
    break;
  }
};

while (true) {
  const opcion = prompt(
    '1. Agregar tarea\n2. Listar tareas\n3. Eliminar tarea\n4. Salir'
  );

  let salir = false;
  switch (opcion) {
    case '1':
      agregarTarea();
      break;
    case '2':
      listarTareas();
      break;
    case '3':
      eliminarTarea();
      break;
    case null:
    case '4':
      alert('Adiós');
      salir = true;
      break;
    default:
      alert('Ingrese una opción válida');
  }

  if (salir) {
    break;
  }
}
