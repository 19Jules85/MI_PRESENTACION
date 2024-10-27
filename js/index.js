let nombre = "Ariel";
let apellido = "Lopez";
let edad = 45;
//para declarar objeto, es la replica de un objeto en la vida real con sus caracteristicas
let celular = {
marca: "samsung",
color: "negro",
capacidad: 30,

}
let persona = {
    nombre: "pedro",
    apellido: "gonzalez",
    edad: 25,
}
//Array: es una lista q tiene varios objetos adentro
let usuarios = [
    {nombre: "Diego",
    apellido: "Lopez",
    edad: 35,
    },
    {nombre: "pablo",
    apellido: "muñoz",
    edad: 26,
    }
]
let celulares = [
    {marca: "Motorola",
    color: "Amarrillo",
    capacidad: 20,
    },
    {marca: "samsung",
    color:"azul",
    capacidad: 24,
    }
]
alert(persona.nombre + " " + persona.apellido + " " + persona.edad); // para acceder a un objeto
alert(usuarios[0].nombre + " " + usuarios[0].apellido + " " + usuarios[0].edad); // para acceder a un array
 //funciones: una función es un bloque de codigo q se puede reutilizar
//función sin parametros
 function saludar() {
    alert(usuarios[0].nombre + " " + usuarios[0].apellido + " " + usuarios[0].edad);
    
 }
 saludar(); //aca llama la funcion(sin parametros) y se ejecuta, siempre se llama la funcion por afuera

 // funciones con parametros y con retorno
 function despedir(nombre) {
    let mensaje = " me llamo " + nombre + " " + apellido + " y me despido ";
    return mensaje;
    
 }
 let respuesta = despedir(usuarios[1].nombre);//para llamar una funcion con parametros
 alert(respuesta);
/*Que es una petición: Los mensajes HTTP, son los medios por los cuales se intercambian 
datos entre servidores y clientes. Hay dos tipos de mensajes: peticiones, enviadas por el cliente al servidor, 
para pedir el inicio de una acción; y respuestas, que son la respuesta del servidor.*/ 

const URL ="https://picsum.photos/id/1/200/300";

// URL de la API a la que deseas hacer la petición GET
async function obtenerdatos() {
    // Función para realizar la petición GET
async function obtenerDatos() {
    try {
      debugger
      // Realiza la petición GET
      const response = await fetch(url);
  
      // Verifica si la respuesta es correcta (status code 200-299)
      if (!response.ok) {
        throw new Error('Error en la petición: ' + response.status);
      }
  
      // Convierte la respuesta a formato JSON
      const data = await response.json();
      // Maneja los datos obtenidos
   
          
  const peticionesVerdaderas = data.filter(peticion => peticion.Completed === true);
  console.log("Peticiones verdaderas:", peticionesVerdaderas);
    console.log(data);
    } catch (error) {
      // Maneja cualquier error que haya ocurrido en la petición
      console.error('Error:', error);
    }
  }
  
  // Llama a la función para obtener los datos
  obtenerDatos();
}