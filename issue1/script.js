let lado1 = document.querySelector('#lado1')
let lado2 = document.querySelector('#lado2')
let lado3 = document.querySelector('#lado3')
let resultado = document.querySelector('#resultado')

function CalcularLado() {
  if (
    parseFloat(lado1.value) >
      parseFloat(lado2.value) + parseFloat(lado3.value) ||
    parseFloat(lado2.value) >
      parseFloat(lado1.value) + parseFloat(lado3.value) ||
    parseFloat(lado3.value) > parseFloat(lado1.value) + parseFloat(lado2.value)
  ) {
    resultado.innerHTML = 'Não é possivel formar um triângulo'
  } else {
    if (
      parseFloat(lado1.value) == parseFloat(lado2.value) &&
      parseFloat(lado1.value) == parseFloat(lado3.value)
    ) {
      resultado.innerHTML = 'Esse é um Triângulo Equilátero'
    } else if (
      parseFloat(lado1.value) == parseFloat(lado2.value) ||
      parseFloat(lado1.value) == parseFloat(lado3.value) ||
      parseFloat(lado2.value) == parseFloat(lado3.value)
    ) {
      resultado.innerHTML = 'Esse é um Triângulo Isórceles'
    } else {
      resultado.innerHTML = 'Esse é um Triângulo Escaleno'
    }
  }
}
