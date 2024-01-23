document.querySelector('h1').innerHTML = 'Hora del Desafío';

function accionButton() {
    console.log('Botón presionado')
}

function accionButtonCiudad() {
    let ciudad = prompt('Ingrese el nombre de la ciudad')
    alert(`Estuve en ${ciudad} y me acordé de ti.`)
}

function accionButtonJS() {
    alert('Yo amo JS');
}

function accionButtonSuma() {
    let numero1 = parseInt(prompt('Ingrese el primer número'))
    let numero2 = parseInt(prompt('Ingrese el segundo número'))
    let resultado = numero1 + numero2
    alert(`El resultado de la suma es ${resultado}`)
}