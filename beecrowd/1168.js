var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var leds = {
  '1':2,
  '2':5,
  '3':5,
  '4':4,
  '5':5,
  '6':6,
  '7':3,
  '8':7,
  '9':6,
  '0':6
}

let qtdNums = parseInt(lines[0])

for (let i = 0; i < lines.length; i++) {
  let numero = lines[i].trim()
  soma = 0
  for (let j = 0; j < numero.length; j++) {
    soma += leds[numero[j]]    
  }
  console.log(`${soma} leds`);
}