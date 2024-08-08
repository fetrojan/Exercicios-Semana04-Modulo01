function somarNumeros (a, b) {
    return a + b
}

var inputNum1 = document.getElementById('inputNumero1')
var inputNum2 = document.getElementById('inputNumero2')
var btnCalcular = document.getElementById('calcular')
var calculadora = document.getElementById('calculadora')
var resultado = document.getElementById('resultado')

function gerarResultado (event) {
    event.preventDefault()

    var num1 = parseFloat(inputNum1.value)
    var num2 = parseFloat(inputNum2.value)

    var soma = somarNumeros(num1, num2)
    console.log(`A soma de ${num1} com ${num2} é igual a ${soma}`)
    resultado.innerText = `A soma de ${num1} com ${num2} é igual a ${soma}`

    inputNum1.value = ''
    inputNum2.value = ''

}

btnCalcular.addEventListener('click', gerarResultado)