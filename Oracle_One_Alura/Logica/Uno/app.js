//Variables
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let numeroMaximo = 3;

let numeroPedido = 0;
numeroPedido = prompt('Indica el número máximo para adivinar el número secreto');

let numeroSecreto = Math.floor(Math.random() * numeroPedido) + 1;

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {

    let numeroUsuario = parseInt(prompt(`¿Me indicas un numero del 1 al ${numeroPedido} por favor?`));

    //alert('Hola Mundo');
    console.log(typeof(numeroUsuario));

    //Este código realiza comparación
    if (numeroUsuario == numeroSecreto) {
        //Condición verdadera
        alert(`!Has acertado! El numero secreto es el ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        break;
    } else {
        if(numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        if (intentos == numeroMaximo){
            alert('Has fallado 3 veces. El juego ha terminado');
            break;
        }
        //Incrementamos el contador cuando no acierta
        intentos++;
        //Condición falsa
        //alert('Has fallado');
        //palabraVeces = 'veces';
    }
}

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

////////////////////////////////////////////////////////////////
//DESAFÍO 4

/*let nombre = "Abraham"

let valor1 = 5;
let valor2 = 2;
let resultado = valor1 + valor2;
let resultado2 = valor1 - valor2;

console.log("¡Bienvenido!");

alert(`¡Bienvenido ${nombre}!`);
let lenguajeFav = prompt("Cúal es el lenguaje de programación que más te gusta?");

console.log(`La suma de ${valor1} y ${valor2} es ${resultado}`);
console.log(`La resta de ${valor1} y ${valor2} es ${resultado2}`);

let edad = prompt("Cúal es tu edad?");
if (edad > 0){
    alert(`Tienes ${edad} años`);
} else {
    alert("Error, ingresa un número válido");
}

let numero = 1;

while (numero <= 10) {
    console.log(numero);
    numero++;
}

let nota = 10;

if (nota >= 7) {
    console.log("Aprobado");
} else {    
    console.log("Desaprobado");
}

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 1000) + 1);*/