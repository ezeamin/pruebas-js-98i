const datos = [
  {
    id: 1,
    nombre: 'Juan',
  },
  {
    id: 2,
    nombre: 'Maria',
  },
  {
    id: 3,
    nombre: 'Firulais',
  },
];

// Event Loop
// new Error()

const getDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (datos.length === 0) {
        const miError = new Error('No hay datos');
        reject(miError);
      }

      resolve(datos);
    }, 1000);
  });
};

// getDatos()
//   .then((contactosData) => {
//     console.log(contactosData);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Promise.all([getDatos(), getDatos(), getDatos()])
//   .then((datosContactos) => {
//     const [datosContactos1, datosContactos2, datosContactos3] = datosContactos;
//     console.log(datosContactos1);
//     console.log(datosContactos2);
//     console.log(datosContactos3);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// async function fetchDatos(){
// const fetchDatos = async () => {
//   try {
//     const contactosData = await getDatos();
//     console.log(contactosData);
//   } catch (err) {
//     console.error(err);
//   }
// };

// fetchDatos();

const url = 'https://thesimpsonsquoteapi.glitch.me/quotes';
const res = await fetch(url);
const data = await res.json();

const $img = document.createElement('img');
$img.src = data[0].image;
document.body.appendChild($img);

console.log(data);
