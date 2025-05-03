const quantidade = parseInt(prompt("Quantas maçãs você deseja comprar?"))

if (isNaN(quantidade) || quantidade <= 0) {
  alert("Por favor, compre ao menos uma maçã.")
} else {
  const precoUnitario = quantidade >= 12 ? 0.25 : 0.30
  const valorTotal = precoUnitario * quantidade

  alert(`Você comprou ${quantidade} maçã(s). Total a pagar: R$ ${valorTotal.toFixed(2)}`)
}

// utilizando ternario de >= 12 ? 0.25 : 0.30; substituindo o if-else
// toFixed(2) transformando o valor em 2 casas decimais para o valor em reais a pagar