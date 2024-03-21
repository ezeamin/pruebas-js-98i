/*
6- Realiza un script que escriba una
pirámide del 1 al 30 de la siguiente forma:

1
22
333
4444
55555
666666
…….
*/

// Este bucle controla las FILAS
for (let i = 1; i <= 30; i++) {
  // Este bucle controla las COLUMNAS
  for (let j = 1; j <= i; j++) {
    document.write(i);
  }
  document.write('<br />');
}
