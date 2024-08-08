function somarNumeros (a, b) {
    return a + b
}

function subtrairNumeros (a, b) {
    return a - b
}

function multiplicarNumeros (a, b) {
    return a * b
}

function dividirNumeros (a, b) {
    return a / b
}

var inputNum1 = document.getElementById('inputNumero1')
var inputNum2 = document.getElementById('inputNumero2')
var btnSomar = document.getElementById('somar')
var btnSubtrair = document.getElementById('subtrair')
var btnMultiplicar = document.getElementById('multiplicar')
var btnDividir = document.getElementById('dividir')
var calculadora = document.getElementById('calculadora')
var resultado = document.getElementById('resultado')

function gerarResultado (event) {
    event.preventDefault()

    var num1 = parseFloat(inputNum1.value)
    var num2 = parseFloat(inputNum2.value)
    var operacao = event.target.id
    var resultadoOperacao

    switch (operacao) {
        case 'somar':
            resultadoOperacao = somarNumeros(num1, num2)
            break;
        case 'subtrair':
            resultadoOperacao = subtrairNumeros(num1, num2)
            break;
        case 'multiplicar':
            resultadoOperacao = multiplicarNumeros(num1, num2)
            break;
        case 'dividir':
            resultadoOperacao = dividirNumeros(num1, num2)
            break;
        default:
            resultadoOperacao = '';
    }

    resultado.innerText = `O resultado da operação é ${resultadoOperacao.toFixed(2)}`
    alert(`O resultado da operação é ${resultadoOperacao.toFixed(2)}`)

    inputNum1.value = ''
    inputNum2.value = ''

}

btnSomar.addEventListener('click', gerarResultado)
btnSubtrair.addEventListener('click', gerarResultado)
btnMultiplicar.addEventListener('click', gerarResultado)
btnDividir.addEventListener('click', gerarResultado)