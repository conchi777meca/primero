let resultado = document.getElementById("resultado");

function calcularEdad() {

    let anioNacimiento = document.getElementById("inputAnioNac").value;
    let anioActual = 2025;

    console.log(anioNacimiento);//control del año de nacimiento

    let edad = anioActual - anioNacimiento;


    //resultado.innerHTML = "<strong>Tu edad es: </strong>" + edad + " años.<br> <em> Ya estás mayor </em>";

    let mensajeEdad;
    if (edad>30) {
        mensajeEdad = "Ya estás mayor";
        //resultado.innerHTML = "<strong>Tu edad es: </strong>" + edad + " años.<br> <em> Ya estás mayor </em>";
    } else if (edad<18) {
        mensajeEdad = "Todavia eres menor de edad";
    } else if (edad>=18 && edad<=30) {
        mensajeEdad = "Ya eres mayor de edad";
    }

   // resultado.innerHTML = "<strong>Tu edad es: </strong>" + edad + " años.<br> <em>" + mensajeEdad + "</em>";
   resultado.innerHTML = `<strong>Tu edad es: </strong> ${edad} años.<br> <em> ${mensajeEdad} </em>`;
}

let name1 = document.getElementById("inputNombre").value;

function mostrarNombre() {
  // Crear una variable que guarde el valor del input

  // Mostrar el valor en un alert
  //alert("👋 Hola " + name);
 resultado.innerHTML = ` Hola ${name1}`;
}