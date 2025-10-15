//Tipos de datos
//number,string,bolean,undefined,null,bigint,symbol,function,object{}

65//number

"65" //string - cadena de caracteres comillas dobles
'Hola' //string - comillas simples
// `Hola  ${} `//string - comillas invertidas, hace refencia a variables

true //bolean
false //bolean

// (5>21) //false
// (67+74) //number


//indefined
let variableIndefinida; //undefined

//variables
let edad; //creación de la variable
const NOMBRE="Roxana"; //no puedo modificar esta variable"
//var no es aconsejable usarla, let es más nuevo y seguro

let miPrimeraVAriable2=(5>21) ; //estilo camel-case sin numeros al ppio y si al final
let calculo=(24-5);

/*console.log(calculo);
console.log(niPrimeraVAriable); Bloque de comentario*/

//typeof

//Funciones
function nombreFuncion(parametro,parametro2) {
    typeof parametro;
    parametro2++;
    let resultado=parametro2+27;
    return resultado;
}

let resultadoFuncion=nombreFuncion(edad,calculo);

nombreFuncion(edad,calculo);

let crearLista=()=>{} //funcion flecha, resume la funcion en una sola linea

//Condicionales
if (edad>=18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

//Arrays son conjunto de datos
//indice      0        1     2
let nombres=["Roxana","Ana","Maria"];

//Object clave:valor,
let persona1={
    nombre:"Roxana",
    edad:65,
    ciudad:"Madrid",
    hijos:["Ana","Maria"],
    casada:true,
    coche:null,
    dni:undefined,
    esPremium:false,
    tel: "54345345"
}

//DOM - Document Object Model, estructura del documento HTML
//Modificar el DOM con JS

document.head.title="Mi primer pagina web";
document.body.style.backgroundColor="lightblue";

document.getElementById("titulo").innerText="Mi primer pagina web con DOM";
document.getElementById("titulo").style.color="blue";
document.getElementById("titulo").style.textAlign="center";

let parrafos=document.getElementsByClassName("parrafo");
parrafos[0].style.color="red";
parrafos[1].style.color="green";
parrafos[2].style.color="purple";

document.getElementById("enlace").href="https://www.google.com";
document.getElementById("enlace").target="_blank";
document.getElementById("enlace").innerText="Enlace a Google";

document.querySelector("#caja-mapa").style.border="2px solid black";
document.querySelector("#caja-mapa").style.padding="10px";
document.querySelector("#caja-mapa").style.width="350px";
document.querySelector("#caja-mapa").style.margin="auto";
document.querySelector("#caja-mapa").style.backgroundColor="white";

// Eventos

let opcion=document.querySelector("#opcion1");
let opcion1=document.getElementById("opcion2");

documentquerySelector("#tarea-nueva").value.trim(); //quita hecos para evitar errores en contraseñas



