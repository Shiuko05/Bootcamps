/*//Variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

while (numeroUsuario == numeroSecreto) {

    let numeroUsuario = prompt('¿Me indicas un numero por favor?');

    //alert('Hola Mundo');
    console.log(numeroUsuario);

    //Este código realiza comparación
    if (numeroUsuario == numeroSecreto) {
        //Condición verdadera
        alert(`!Has acertado! El numero secreto es el ${numeroSecreto}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if(numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        //Condición falsa
        //alert('Has fallado');
        palabraVeces = 'veces';
    }
}*/

////////////////////////////////////////////////////////////////
//DESAFÍO 1

/*alert ('¡Bienvenida y bienvenido a nuestro sitio web!');

let nombre = "Luna";
let edad = 25;

let numeroDeVentas = 50;

alert("¡Error! Completa todos los campos");

let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

nombre = prompt("¿Cuál es tu nombre?");
edad = prompt("¿Cuál es tu edad?");

if (edad >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!");
}*/

////////////////////////////////////////////////////////////////
//DESAFÍO 2

/*let diaDeSemana = prompt("Qué día es hoy?");

if (diaDeSemana == "Sábado") {
    alert("¡Es fin de semana!");
} else if (diaDeSemana == "Domingo") {
    alert("¡Es fin de semana!");
} else {
    alert("¡Es día de semana!");
}

let numero = prompt("Ingrese un número");
if (numero > 0) {
    alert("El número es positivo");
} else {
    alert("El número es negativo");
}

let puntuacion = 90;

if (puntuacion == 100) {
    alert("¡Felicidades, has sabado!");
} else {
    alert("Intenta nuevamente para ganar");
}

let saldoDeCuenta = 3000;
alert(`El saldo de su cuenta es ${saldoDeCuenta}`);

let nombre = prompt("Ingresa tu nombre");
alert(`Bienvenida ${nombre}`);*/

////////////////////////////////////////////////////////////////
//DESAFÍO 3

/*let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

while (contador >= 0) {
    console.log(contador);
    contador--;
}

let contadorDos = 0;
let numero = prompt("Ingresa un numero");
while (numero >= contadorDos) {
    console.log(contadorDos);
    contadorDos++;
}*/