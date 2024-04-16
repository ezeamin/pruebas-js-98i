// PascalCase
class Persona {
  // Propiedades usando el constructor
  constructor(nombre, edad, estaCasado = false) {
    this.nombre = nombre;
    this.edad = edad;
    this.estaCasado = estaCasado;
  }

  // Métodos
  presentarse() {
    console.log(`Hola! Soy ${this.nombre}, tengo ${this.edad} años`);
  }

  crecer() {
    this.edad++;
    console.log(`Crecí! Tengo ${this.edad} años`);
  }
}

const juan = new Persona('juan', 22);
const lucia = new Persona('lucia', 33, false);

console.log(juan);
console.log(lucia);

juan.presentarse();
lucia.presentarse();
