var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tamanhoAlbum = parseInt(lines[0])
let pacote = parseInt(lines[1])

let novas = new Set()

for (let i = 2; i <= pacote+1; i++) {
  novas.add(lines[i])  
}

let faltam = tamanhoAlbum - novas.size
console.log(faltam)

