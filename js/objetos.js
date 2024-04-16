import { generarNumeroAleatorio } from "./utils/utils.js";

// https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm

const persona = {
  // Propiedades
  nombre: 'Pepe',
  edad: generarNumeroAleatorio(1, 100),
  estaCasado: true,
  idiomas: ['Español', 'Inglés'],
  direccion: {
    calle: 'Av. Aconquija',
    numero: '123',
    ciudad: 'Yerba Buena',
    pais: 'Argentina',
  },

  // Metodos
  presentarse: function () {
    console.log(`Hola! Soy ${this.nombre}, tengo ${this.edad} años`);
  },
  crecer: function () {
    this.edad++;
    console.log(`Crecí! Tengo ${this.edad} años`);
  },
};

// Hoisting

console.log(persona);
persona.presentarse();
persona.crecer();

persona.apellido = 'Juarez';
persona.edad = 15;

console.log(persona);

const nombrePropiedad = 'nombre';
console.log(persona[nombrePropiedad]);

document.write('Hola');
