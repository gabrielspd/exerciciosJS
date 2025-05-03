let soma = 0;

for (let i = 1; i <= 5; i++) {
  let numero = parseFloat(prompt(`Digite o ${i}º número:`));

  while (isNaN(numero)) {
    numero = parseFloat(prompt(`Entrada inválida. Digite o ${i}º número novamente:`));
  }

  soma += numero;
}

alert(`A soma dos números digitados é: ${soma}`);
