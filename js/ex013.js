let soma = 0
let contador = 0
let numero

do {
    numero = parseFloat(prompt("Digite um número (0 para encerrar):"))
    
    if (!isNaN(numero)) {
        if (numero !== 0) {
            soma += numero
            contador++
        }
    } else {
        alert("Por favor, insira um número válido.")
    }
} while (numero !== 0)

if (contador > 0) {
    const media = soma / contador
    alert("A média é: " + media.toFixed(2))
} else {
    alert("Nenhum número válido foi inserido.")
}


// toFixed(2) utilizado pra formatar a resposta em decimal. E correção com NaN pra aceitar apenas números