// estructuras de control, condicionales


if (Condition) {
    // instrucciones si se cumple la condicion
} else {
    // instrucciones si no se cumple la condicion
}


if (Condition1) {
    // instrucciones si se cumple la condicion1
} else if (Condition2) {
    // instrucciones si se cumple la condicion2
}else {
    // instrucciones si no se cumple ninguna condicion
}

switch (expression) {
    case value1:
        // instrucciones si la expresion es igual a value1
        break;
    case value2:
        // instrucciones si la expresion es igual a value2
        break;
    // puedes tener tantos casos como quieras
    default:
        // instrucciones si la expresion no coincide con ningun caso
}

let numero=9;
switch (numero) {
    case 8:
        alert("El numero es ocho");
        numero+50;
        break;
    case 9:
        alert("El numero es nueve");
        numero+100;
        break;
    case 10:
        alert("El numero es diez");
        numero+150;
        break;
    case 1:;
    case 2:;

    default: alert("No sé qué núumero es este");
}

// operadores ternarios
// dato ? instrucciones si es true : instrucciones si es false
Condition ? expression1 : expression2;

let condicion=false;
condicion ? alert("La condicion es verdadera") : alert("La condicion es falsa");

let edad=20;
let mensaje= (edad>=18) ? "Eres mayor de edad" : "Eres menor de edad";
alert(mensaje);

numero ? alert("El numero es verdadero") : alert("El numero es falso");