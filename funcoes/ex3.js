function main() {
  let nomes = ["João", "Maria", "Joana", "Carlos", "Alice"]
  minusculas(nomes)  
  anonimo(nomes)  
  console.log(nomes);
}

function minusculas(vet) {
  for (let i = 0; i < vet.length; i++) {
  vet[i] = vet[i].toLowerCase()
  }
}

function anonimo(vet) {
  for (let i = 0; i < vet.length; i++) {
    if (vet[i].startsWith("a")) { 
      vet[i] = "Anônimo"
    }    
  }
}

main()