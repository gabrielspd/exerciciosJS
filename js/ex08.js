const valor1 = parseFloat(prompt("Digite o primeiro valor:"))
const valor2 = parseFloat(prompt("Digite o segundo valor:"))

if (isNaN(valor1) || isNaN(valor2)) {
  alert("Por favor, digite apenas números.")
} else if (valor1 === valor2) {
  alert("Os valores devem ser diferentes.")
} else {
  const ordem = valor1 < valor2 ? `${valor1}, ${valor2}` : `${valor2}, ${valor1}`;
  alert(`Valores em ordem crescente: ${ordem}`)
}

// utilizando ternario pra verificar a condição, sendo apenas de 2 valores