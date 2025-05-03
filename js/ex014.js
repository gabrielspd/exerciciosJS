let numero = parseInt(prompt("Digite um número para calcular o fatorial:"))
let fatorial = 1

if (numero < 0) {
    alert("O fatorial não existe para números negativos.")
} else {
    for (let i = numero; i > 1; i--) {
        fatorial *= i
    }
    alert(`O fatorial de ${numero} é: ${fatorial}`)
}

// utilizando o proprio numero pra girar o i no for