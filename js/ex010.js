const numero = parseInt(prompt("Digite um número inteiro:"));

if (isNaN(numero)) {
  alert("Valor inválido! Por favor, digite um número inteiro.");
} else {
  for (let i = 1; i <= 10; i++) {
    alert(`Repetição ${i}: ${numero}`);
  }
}

// utilizando repetição do ultimo exercicio para fazer a repetição dos valores 10 vezes