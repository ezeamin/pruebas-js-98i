let nombreInicial = "Lucila"
let nombresChicos = ["Eze", "Jose"]
let nombresChicas = ["Anabela", nombreInicial]
// let edades = [26, 28, null]
let nombres = []

console.log(nombres)
// console.log(edades)

//----- Mostrar el elemento según su posición -----
// console.log(nombres[1]);

//----- agregar el ultimo -----
nombres.push("Nahuel")

//----- eliminar el ultimo -----
nombres.pop()

//----- agregar al comienzo del arreglo -----
nombres.unshift("Nahuel")

//----- elimiar el primero -----
nombres.shift()

// console.log(nombres)

//----- devuelve el numero de la posicion / -1 si no existe -----
let index = nombres.indexOf("Nahuel")
// console.log(index)

//----- Elimina elementos (posicion, cantidad a eliminar, elemento a agregar) -----
// nombres.splice(1,2,"Paula", "Nahuel")
// let nombresEliminados = nombres.splice(1,2)
// console.log(nombresEliminados)
// console.log(nombres)

//----- verifica si existe el elemento en el arreglo -----
console.log(nombres.includes("Paula"))

//----- Une ambos arreglos en un arreglo nuevo -----
nombres = nombresChicas.concat(nombresChicos)
console.log(nombres)

//----- Transforma el arreglo a String -----
console.log(nombres.join())