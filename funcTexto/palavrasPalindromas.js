// let palavra = prompt("Informe uma palavra")

// let limpa = palavra.trim()

// let vetor = limpa.split("")

// let invertida = vetor.reverse()

// let palavraInvertida = invertida.join("")

// if (palavra == palavraInvertida) {
//   alert("A palavra é um palíndromo")
// }
// else{
//   alert("A palavra não é palíndroma")
// }

let palavra = prompt("Informe uma palavra")

let invertida = palavra.trim().split("").reverse().join("")

if (palavra == invertida) {
    alert("A palavra é um palíndromo")
  }
  else{
    alert("A palavra não é palíndroma")
  }