function main() {
  mensagem("Bom dia");
  mensagem("Boa tarde");
  mensagem("Boa noite");

  // Chamada da função com a valendo 2 e b valendo 5 e mostrando no console o resultado da funcao
  console.log(soma(2, 5))

    // Chamada da função com a valendo 2 e b valendo 5 e mostrando no console o resultado da funcao
  console.log(multiplicacao(2, 5))

}

// Funcao que recebe parametro
// Não retorna valor, apenas recebe e devolve no console
function mensagem(saudacao) {
  console.log(saudacao);
  
}

// Retorna valor (soma de a e b)
function soma(a, b) {
  return a + b
}

function multiplicacao(a, b) {
  return a * b
}

main()

// A função mensagem é chamada dentro da main recebendo os valores Bom dia, Boa tarde e Boa noite
// inserindo no parametro saudacao