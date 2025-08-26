let mat = [] //vetor
let vet = []

for (let i = 0; i < 4; i++) {
  mat[i] = []
  vet[i] = prompt("Informe o nome do vendedor")  
  for (let j = 0; j < 7; j++) {
mat[i][j] = parseInt(Math.random * 100)    
  }
}
console.log(vet);
console.log(mat);

let soma = 0
for (let i = 0; i < 4; i++) {
  soma = 0
  for (let j = 0; j < 7; j++) {
    soma = soma + mat[i][j]    
  }  
  console.log(`Vendedor ${vet[i]} vendeu ${soma}`);
}

let somaPordia = 0

for (let j = 0; j < 7; j++) {
  somaPordia = 0 
  for (let i = 0; i < 4; i++) {
  somaPordia = somaPordia + mat[i][j]
  }
  console.log(`Total de vendas no dia foi ${somaPordia}`); 
}

let maior = mat[0][0]
let IMaior = 0
let JMaior = 0
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 7; j++) {
    if (mat[i][j] > maior) {
      maior = mat[i][j]
      IMaior = i
      JMaior = J
    }    
  }  
}
console.log(`A maior venda foi ${maior} na posição ${IMaior} ${JMaior}`);

let somaMedia = 0
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < j; j++) {
  somaMedia = somaMedia + mat[i][j]    
  }
}
console.log(`A média das vendas é ${somaMedia / (mat.length * mat[0].length)}`);



