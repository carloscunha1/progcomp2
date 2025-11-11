let vendas = [150, 300, 50, 450, 100];

let totalVendas = vendas.reduce(function (acumulador, atual) {
  return acumulador + atual
}, 0)

console.log(totalVendas);
