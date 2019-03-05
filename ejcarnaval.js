
console.log(" ");
console.log("Ejercicio 15 objetos");

var ganadoras = [
    {
      nombre: 'Bebe Zahara Benet',
      temporada: '1',
      foto: 'http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg'
    },
    {
      nombre: 'Tyra Sanchez',
      temporada: '2',
      foto: 'http://www.nokeynoshade.party/images/tyra-sanchez.jpg'
    },
    { nombre: 'Raja',
      temporada: '3',
      foto: 'http://www.nokeynoshade.party/images/raja.jpg'
    },
    {
      nombre: 'Sharon Needles',
      temporada: '4',
      foto: 'http://www.nokeynoshade.party/images/sharon-needles.jpg'
    },
    {
      nombre: 'Jinkx Monsoon',
      temporada: '5',
      foto: 'http://www.nokeynoshade.party/images/jinkx-monsoon.jpg'
    },
    {
      nombre: 'Bianca Del Rio',
      temporada: '6',
      foto: 'http://www.nokeynoshade.party/images/bianca-del-rio.jpg'
    }
  ];


  for (i = 0; i < ganadoras.length; i++ ) {
      console.log("La ganadora de la temporada " + ganadoras[i].temporada + " fue " + ganadoras[i].nombre)
  }

  console.log(" ");
  console.log("Ejercicio 17 objetos");

  var bandas = [
    { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
    { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
    { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
    { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
    { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
  ];

  for (i = 0; i < bandas.length; i++) { 
      if (bandas[i].activa === true) {
          console.log(bandas[i].nombre + " está activa desde el año " + bandas[i].fundacion);
      }else {
          console.log(bandas[i].nombre + " no está activa.")
      }
  }

  console.log(" ")
  console.log("Ejercicio 23 objetos")

var user2 = {
    username: 'ada_lovelace',
    password: '1234567890!'
  };
  
  var user3 = {
    username: 'grace_hopper',
    password: '1234567890',
    email: 'grace@hopper.com'
  };

  var prop2 = Object.keys(user2);
  var prop3 = Object.keys (user3);


function hasProperty(object, property) {
    return (object.includes(property)) 
  }

console.log(hasProperty(prop2, "email"));
console.log(hasProperty(prop2,"password"));
console.log(hasProperty(prop2, "id"));
console.log(hasProperty(prop3, "email"));
console.log(hasProperty(prop3, "password"));
console.log(hasProperty(prop3, "id"))
