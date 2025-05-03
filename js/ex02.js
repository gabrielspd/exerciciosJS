const nome = prompt("Digite o nome da pessoa:")
const idade = parseInt(prompt("Digite a idade da pessoa:"))

if (isNaN(idade)) {
  alert("Por favor, insira uma idade válida.")
} else {
  let categoria

  if (idade >= 0 && idade <= 12) {
    categoria = "criança"
  } else if (idade >= 13 && idade <= 17) {
    categoria = "adolescente"
  } else if (idade >= 18 && idade <= 64) {
    categoria = "adulto"
  } else if (idade >= 65) {
    categoria = "idoso"
  }

  alert(`${nome} é um(a) ${categoria}.`)
}


