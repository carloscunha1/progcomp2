let idades = [12, 17, 25, 15, 34, 60, 8];

let maiores = idades.filter(function (idade) {
  if (idade >= 18) {
    return idade
  }
})

console.log(maiores);
