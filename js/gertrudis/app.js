import { Comic } from './Comic.js';
import { Libro } from './Libro.js';

const hp = new Libro('JK Rowling', 'Harry Potter', 3000, 10);

hp.verInfo();

const maus = new Comic('Art Spiegelman', 'Maus', 4000, 5, 'Pepe', 2);

maus.verInfo();
