let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Adivinaste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', '¡Ya no hay más números para adivinar!');
        document.getElementById('intentar').setAttribute('disabled', true);
    } else {
        // Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego de número secreto');
    asignarTextoElemento('p', `Adivina el número secreto entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    //console.log(numeroSecreto);
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);   
}

condicionesIniciales();

/////////////////////////////////////////////////////////////
//DESAFÍO 2

/*function texto() {
    console.log('Hola Mundo');
}

texto();

function textoNombre(nombre) {
    console.log('Hola ' + nombre);
}

textoNombre('Alura');

function numeroRetorno(numero) {
    return numero * 2;
}

console.log(numeroRetorno(5));

function numeroPromedio(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}

console.log(numeroPromedio(5, 10, 10));

function numeroMayor(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}

console.log(numeroMayor(5, 10));

function numeroMultiplicado(numero) {
    return numero * numero;
}

console.log(numeroMultiplicado(5));*/

/////////////////////////////////////////////////////////////
//DESAFÍO 3


//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
/*function imc (peso, altura) {
    return peso / (altura * altura);
}

console.log(imc(80, 1.8));

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }
    return resultado;
}

console.log(factorial(5));

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function dolarReal(dolar) {
    return dolar * 4.80;
}

console.log(dolarReal(10));

//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function areaPerimetro(altura, anchura) {
    let area = altura * anchura;
    let perimetro = (altura * 2) + (anchura * 2);
    return `El área es ${area} y el perímetro es ${perimetro}`;
}

console.log(areaPerimetro(10, 5));

//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function areaPerimetroCirculo(radio) {
    let area = 3.14 * (radio * radio);
    let perimetro = 2 * 3.14 * radio;
    return `El área es ${area} y el perímetro es ${perimetro}`;
}

console.log(areaPerimetroCirculo(5));

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro utilizando whie.

function tablaMultiplicar(numero) {
    let i = 1;
    while (i <= 10) {
        console.log(`${numero} * ${i} = ${numero * i}`);
        i++;
    }
}

tablaMultiplicar(5);*/

/////////////////////////////////////////////////////////////
//DESAFÍO 4

//Crea una lista vacía llamada "listaGenerica".

/*let listaGenerica = [];

//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function mostrarLenguages() {
    console.log(lenguagesDeProgramacion);
}

mostrarLenguages();

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function mostrarLenguagesInverso() {
    console.log(lenguagesDeProgramacion.reverse());
}

mostrarLenguagesInverso();

//Crea una función que calcule el promedio de los elementos en una lista de números con while.

function promedioNumeros(lista) {
    let i = 0;
    let suma = 0;
    while (i < lista.length) {
        suma += lista[i];
        i++;
    }
    return suma / lista.length;
}

console.log(promedioNumeros([10, 10, 9, 8, 8]));

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista con while.

function numeroMayorMenor(lista) {
    let i = 0;
    let mayor = 0;
    let menor = lista[0];
    while (i < lista.length) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
        i++;
    }
    return `El número mayor es ${mayor} y el menor es ${menor}`;
}

console.log(numeroMayorMenor([6, 1, 2, 3, 4, 5]));

//Crea una función que devuelva la suma de todos los elementos en una lista.

function sumaElementos(lista) {
    let i = 0;
    let suma = 0;
    while (i < lista.length) {
        suma += lista[i];
        i++;
    }
    return suma;
}

console.log(sumaElementos([1, 2, 3, 4, 5]));

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function posicionElemento(lista, elemento) {
    let i = 0;
    while (i < lista.length) {
        if (lista[i] === elemento) {
            return i;
        }
        i++;
    }
    return -1;
}

console.log(posicionElemento([1, 2, 3, 4, 5], 3));

//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

function sumaListas(lista1, lista2) {
    let i = 0;
    let listaSuma = [];
    while (i < lista1.length) {
        listaSuma.push(lista1[i] + lista2[i]);
        i++;
    }
    return listaSuma;
}

console.log(sumaListas([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function cuadradoNumeros(lista) {
    let i = 0;
    let listaCuadrado = [];
    while (i < lista.length) {
        listaCuadrado.push(lista[i] * lista[i]);
        i++;
    }
    return listaCuadrado;
}

console.log(cuadradoNumeros([1, 2, 3, 4, 5]));*/