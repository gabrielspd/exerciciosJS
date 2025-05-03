const opcao = prompt("Escolha uma opção:\n1. Aluno\n2. Professor\n3. Diretor")

switch (opcao) {
  case "1":
    alert("Você escolheu a opção: Aluno")
    break
  case "2":
    alert("Você escolheu a opção: Professor")
    break
  case "3":
    alert("Você escolheu a opção: Diretor")
    break
  default:
    alert("Opção inválida. Por favor, selecione a opção 1, 2 ou 3.")
}

// Utilizando break para para no switch case após uma opção selecionada. Caso contrario executaria todo o codigo até o fim do switch.