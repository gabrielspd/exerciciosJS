const peso = parseFloat(prompt("Digite o seu peso (kg):"))
const alturaCm = parseFloat(prompt("Digite a sua altura em cm (exemplo: 1.70m = 170):"))

if (isNaN(peso) || isNaN(alturaCm) || alturaCm <= 0 || peso <= 0) {
  alert("Por favor, insira valores válidos para peso e altura.")
} else {
  const imc = peso / ((alturaCm / 100) ** 2)

  let categoria
  if (imc < 18.5) {
    categoria = "Baixo peso"
  } else if (imc >= 18.5 && imc < 24.9) {
    categoria = "Peso normal"
  } else if (imc >= 25 && imc < 29.9) {
    categoria = "Sobrepeso"
  } else {
    categoria = "Obesidade"
  }

  alert(`O IMC é ${imc.toFixed(2)}. Que está na categoria: ${categoria}.`)
}

// melhor exemplo do anterior. poderia ter sido utilizado switch-case para a mesma finalidade também