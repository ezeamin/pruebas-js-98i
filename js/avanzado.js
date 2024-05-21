const persona = {
  nombre: "Juan",
  apellido: "Argento",
  edad: 25,
  // ...
};

// Desestructuración de Objetos y Spread Operator
const { nombre: nombrePersona, edad } = persona;

// console.log(nombre, otros);

const nombres = ["juan", "pepe", "maria", "benito"];

const [primeraPosicion, ...otros] = nombres;

console.log(nombrePersona, primeraPosicion, otros);

const persona2 = {
  ...persona,
  colorDePelo: "marron",
};

console.log(persona2);

// Ternarias
let estaEditando = false;
// let msg = "Usuario creado exitosamente";

// if (estaEditando) {
//   msg = "Usuario editado exitosamente";
// }

const msg = estaEditando
  ? "Usuario editado exitosamente"
  : "Usuario creado exitosamente";

console.log(msg);
