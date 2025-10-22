// ESTRUCTURAS DE CONTROL / CONDICIONALES

// if // if else // else

// if (condition) {
  // instrucciones si se cumple la condición
// }

// if (condition) {
  // instrucciones si se cumple la condición
// } else {
  // instrucciones si la condición no se ha cumplido
// }

// if (condition) {
//   // instrucciones si se cumple la condición
// } else if (condición){
//   // instrucciones si la primera condición no se cumple pero la nueva sí
// } else  if (condición){
//   // instrucciones si las anteriores condiciones no se han cumplido pero la ultima sí
// }


// switch 
// permite controlar el valor de una variable

// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

// Ejemplo
//let numero = 9;

// switch (numero){
//   case 8: 
//     alert("el número es ocho");
//     numero+50;
//     break;

//   case 1: alert("el número es uno"); break;

//   case 9: alert("el número es nueve");
//           break;
    
//   case 3:
//   case 2: alert("el número es dos o tres"); break;

//   case "Hola":
//   case false:

//   default: alert("No sé que número es.")
// }



// Operador Ternario

// dato ? instruccion si es verdadero : instruccion si es falso;

// Ejemplo
// let condicion = false;

//  condicion ? alert("La condición es verdadera") : alert("La condición es falsa");

//   numero ? alert("El número es verdadero") : alert("El número es falso");


//prompt("", "");

/////////////////
// Ejercicio 1 //
/////////////////
// Convierte estos if en un switch
// let a = +prompt('Elige un número del 0 al 3', ''); // + lo toma como número 

// if (a == 0) {
//   alert( "Has elegido cero");
// }

// if (a == 1) {
//   alert( "Has elegido el uno" );
// }

// if (a == 2 || a == 3) {
//   alert( "Elegiste un dos o un tres" );
// }


// let a = +prompt('Elige un número del 0 al 3', '');

// switch (a) {
//   case 0:
//     alert("Has elegido cero");
//     break;
//   case 1:
//     alert("Has elegido el uno");
//     break;
//   case 2||3:
//       alert("Elegiste un dos o un tres");
//     break;
//   default: alert("Elegiste un número fuera de rango");
//  }


/////////////////
// Ejercicio 2 //
/////////////////
// Convierte este switch en un if
// let estacion = "otoño";
// let mensajeEstacion;

// switch (estacion) {
//   case 'primavera':
//     mensajeEstacion = "Estamos en primavera, viene el buen tiempo.";
//     break;

//   case 'otoño':
//   case 'invierno':
//     mensajeEstacion = 'Estamos en otoño o invierno, hace frío.';
//     break;

//   default:
//     mensajeEstacion = 'Probablemente sea verano, ¿hace calor?';
// }
// document.getElementById("caja-mensaje-estacion").innerText = mensajeEstacion;

// //let estacion = "otoño";
// let estacion = prompt('Elige una estación', '');
// let mensajeEstacion;
// if (estacion === 'primavera') {
//   mensajeEstacion = "Estamos en primavera, viene el buen tiempo.";
// } else if (estacion === 'otoño' || estacion === 'invierno') {
//   mensajeEstacion = 'Estamos en otoño o invierno, hace frío.';
// } else {
//   mensajeEstacion = 'Probablemente sea verano, ¿hace calor?';
// }
// document.getElementById("caja-mensaje-estacion").innerText = mensajeEstacion;

////////////////
//ejercicio 3 //
////////////////
// Utiliza un operador ternario para asignar un valor a una variable en función de una condición
//Pedir edad y dar un mensaje si es menor de edad y otro si es mayor con bienvenida

let edad = +prompt("¿Cuál es tu edad?", "");
 alert("edad ="+edad);
let tipoUsuario;
edad < 18  ? tipoUsuario="Eres menor de edad" : tipoUsuario="Eres mayor de edad, enhorabuena!" 
// alert("tipoUsuario =" +tipoUsuario);
document.getElementById("edad").innerText = tipoUsuario; //necesiata una var en html

//otra manera
// edad < 18  ? alert("Eres menor de edad") : alert("Eres mayor de edad, enhorabuena!");
//otra
//let mayoredad=


////////////////
//ejercicio 4 //
////////////////
// comprobar si una contraseña es correcta
let contasenia
if(contrasenia != ""){

}