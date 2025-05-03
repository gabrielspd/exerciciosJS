const ladoA = parseInt(prompt("Informe o valor do lado A:"))
const ladoB = parseInt(prompt("Informe o valor do lado B:"))
const ladoC = parseInt(prompt("Informe o valor do lado C:"))

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    if (ladoA === ladoB && ladoB === ladoC) {
        alert("O triângulo é Equilátero.")
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        alert("O triângulo é Isósceles.")
    } else {
        alert("O triângulo é Escaleno.")
    }
} else {
    alert("Os valores informados não formam um triângulo.")
}   

// valores obedecendo a Desigualdade Triangular são informados no ultimo else