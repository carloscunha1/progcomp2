const notas = [8.5, 7.0, 9.5, 6.0, 5.5, 10.0, 4.0, 7.8, 8.0, 6.7];

console.log("Lista de notas:");

let soma = 0;
let aprovados = 0; 
let notasEmPosicoesPares = []; 

notas.forEach(function (nota, indice) {
  console.log(`Aluno ${indice + 1}: ${nota.toFixed(1)}`);

  soma += nota;

  if (nota >= 6) {
    aprovados++;
  }

  if (indice % 2 === 0) {
    notasEmPosicoesPares.push(nota);
  }
});

const media = soma / notas.length;
console.log(`Soma das notas: ${soma.toFixed(2)}`);
console.log(`Média da turma: ${media.toFixed(2)}`);
console.log(`Aprovados: ${aprovados} / ${notas.length}`);
console.log(`Notas em posições pares: ${notasEmPosicoesPares}`);
