import { Libro } from './Libro.js';

export class Comic extends Libro {
  constructor(autor, titulo, precio, stock, ilustradores, volumen) {
    super(autor, titulo, precio, stock);
    this.ilustradores = ilustradores;
    this.volumen = volumen;
  }

  verInfo() {
    super.verInfo()
    console.log(this.ilustradores, this.volumen);
  }
}
