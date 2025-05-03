let n1 = 0, n2 = 1, n3
let count = 0

while (count < 10) {
    alert(n1)
    n3 = n1 + n2
    n1 = n2
    n2 = n3
    count++
}

// utilizando 3 variaveis para fazer girar 10 vezes. a sequencia n3 só vai receber os valores somados e armazenar. 