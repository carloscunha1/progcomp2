let precosUSD = [10, 25.50, 8, 100, 35.25];

let precosReal = precosUSD.map(function (preco) {
  return (preco * 5).toFixed(2);
});

console.log(precosReal);
