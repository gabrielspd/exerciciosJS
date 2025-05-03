const numero = parseInt(prompt("Digite um número inteiro:"))

if (isNaN(numero)) {
  alert("Por favor, insira um número válido.")
} else if (numero % 2 === 0) {
  alert(`O número ${numero} é par.`)
} else {
  alert(`O número ${numero} é ímpar.`)
}


// isNaN significa um verificador para Not a Number, caso não seja um número o valor inserido, será invalidado.