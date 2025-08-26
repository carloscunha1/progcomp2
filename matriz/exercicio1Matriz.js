let matriz = [];

// Preenchendo a matriz com números aleatórios de 0 a 9
for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = Math.floor(Math.random() * 10); // Gera números inteiros de 0 a 9
    }
}

let soma = 0;
let somaPares = 0;
let somaDiagSec = 0;

// Calculando a soma total e a quantidade de números pares
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        soma += matriz[i][j]; // Soma de todos os elementos
        if (matriz[i][j] % 2 === 0) { // Verifica se o número é par
            somaPares++;
        }
    }
}

// Calculando a soma da diagonal secundária
for (let i = 0; i < matriz.length; i++) {
    somaDiagSec += matriz[i][matriz.length - 1 - i]; // Soma os elementos da diagonal secundária
}

// Exibindo os resultados
console.log("Soma total:", soma);
console.log("Quantidade de números pares:", somaPares);
console.log("Soma da diagonal secundária:", somaDiagSec);
console.table(matriz);