const nota = parseFloat(prompt("Digite a nota (0 a 10):"))

if (isNaN(nota)) {
  alert("Por favor, insira uma nota válida.")
} else {
  let status

  if (nota >= 7.0 && nota <= 10.0) {
    status = "Aprovado"
  } else if (nota >= 4.0 && nota <= 6.9) {
    status = "Recuperação"
  } else if (nota >= 0.0 && nota <= 3.9) {
    status = "Reprovado"
  } else {
    status = "Nota inválida"
  }

  alert(`Com a nota de valor ${nota}. Você está: ${status}.`)
}

// utilizando floats por se tratar de notas, equivalência por média em ensino escolares