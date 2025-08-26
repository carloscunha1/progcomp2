let regioes = []
let dias = []

for (let i = 0; i < 5; i++) {
  regioes.push(prompt(`Informe o nome da região ${i+1}`))  
}

for (let i = 0; i < 5; i++) {
  dias.push(Number(prompt(`Informe o dia ${i+1}`)))   
}

let poluicao = []
for (let i = 0; i < 5; i++) {
  poluicao[i] = []
  for (let j = 0; j < 5; j++) {
    poluicao[i] = parseInt(Math.random() * 500)
  }
}

let somaDP = 0
for (let i = 0; i < poluicao.length; i++) {
  console.log(`Elemento da diagonal principal ${poluicao[i][i]}`);  
}
console.log(`A média da DP é: ${somaDP/poluicao.length}`);

somaDS = 0

for (let i = 0; i < poluicao.length; i++) {
  console.log(`Elemento da diagonal secundáruia: ${poluicao[i][4-i]}`);  
}
console.log(`A média da DS é ${somaDS/poluicao.length}`);

let iMaior = 0; let jMaior = 0; let maior = poluicao[0][0]
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (poluicao[i][j] > maior) {
      maior = poluicao[i][j]
      iMaior = i; jMaior = j
    }
  }  
}
console.log(`O nível ${maior} ocorreu na região ${regioes[iMaior]} no dia ${doas[jMaior]}`);

let qtdNivelCritico = 0 
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (poluicao[i][j] > 300) {
      qtdNivelCritico ++
    }
  }
}
console.log(`Quantidade de níveis críticos (acima de 300): ${qtdNivelCritico}`);