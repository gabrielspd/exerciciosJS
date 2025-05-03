const numero = parseInt(prompt("Digite um número para ver a tabuada:"))

if (isNaN(numero)) {
  alert("Por favor, digite um número válido.")
} else {
  let resultado = `Tabuada do ${numero}:\n`
  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`
  }
  alert(resultado);
}

// utilizei o for 10 vezes com i para fazer a tabuada mais rapidamente e numa estrutura de for