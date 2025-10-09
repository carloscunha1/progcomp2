function cadastroInicial(funcionarios) {
  funcionarios.push({ nome: "Alice", cargo: "Estagiario", salario: 1000 })
  funcionarios.push({ nome: "Carlos", cargo: "Desenvolvedor Back End Sênior", salario: 8000 })
  funcionarios.push({ nome: "Beatriz", cargo: "Desenvolvedor Back End Júnior", salario: 2500 })
}

function cadastraNovo(funcionarios) {
  nome = prompt("Digite o nome do novo funcionario")
  cargo = prompt("Digite o cargo do novo funcionario")
  salario = Number(prompt("Digite o salario do novo funcionario"))

  funcionarios.push({nome, cargo, salario})
}

function listarNomes(funcionarios) {
  for (let i = 0; i < funcionarios.length; i++) {
    console.log(funcionarios[i].nome);
  }
}

function aumentarSalario(funcionarios) {
  for (let funcionario of funcionarios) {
    funcionario.salario *= 1.1
  }
  return funcionarios
}

function buscarSalario(funcionarios, nomeFuncionario) {
  for (let i = 0; i < funcionarios.length; i++) {
    if (funcionarios[i].nome == nomeFuncionario) {
      return funcionarios[i].salario
    }
  }
  alert("Funcionario não encontrado")
}

function atualizaCargo(funcionarios, nomeFuncionario, cargoNovo) {
  for (let i = 0; i < funcionarios.length; i++) {
    if (funcionarios[i].nome == nomeFuncionario) {
      funcionarios[i].cargo = cargoNovo
    }
  }
  return funcionarios
}

function removeFuncionario(funcionarios, nomeFuncionario) {
  for (let i = 0; i < funcionarios.length; i++) {
    if (funcionarios[i].nome == nomeFuncionario) {
      funcionarios.splice(i, 1)
    }
  }
  return funcionarios
}

function mediaSalarial(funcionarios) {
  let somaSalarios = 0
  for (let i = 0; i < funcionarios.length; i++) {
    somaSalarios += funcionarios[i].salario
  }
  let divisao = somaSalarios / funcionarios.length
  return divisao
}

function main() {
  let vetor = []
  cadastroInicial(vetor) //Faz o cadastro inicial
  let opcao
  do {
opcao = Number(prompt(
      "1 - Cadastrar novo funcionário\n" +
      "2 - Listar todos os nomes dos funcionários\n" +
      "3 - Aumentar o salário de todos em 10%\n" +
      "4 - Buscar salário pelo nome\n" +
      "5 - Atualizar cargo de um funcionário\n" +
      "6 - Remover funcionário pelo nome\n" +
      "7 - Exibir média salarial da empresa\n" +
      "8 - Encerrar o programa"
    ));    
    switch (opcao) {
      case 1:cadastraNovo(vetor);break;
      case 2:listarNomes(vetor);break;
      case 3:console.log(aumentarSalario(vetor));return;
      case 4:let nomeBusca = prompt("Informe o nome do funcionario a ter o salario mostrado:")
              console.log(buscarSalario(vetor, nomeBusca));
              return;
      case 5:let nomeAtualiza = prompt("Informe o nome do funcionario a ter o cargo atualizado:")
             let cargo = prompt("Informe o novo cargo do funcionario:")
              console.log(atualizaCargo(vetor, nomeAtualiza, cargo));
              break
      case 6:let nomeRemove = prompt("Informe o nome do funcionario a ser removido:")
              console.log(removeFuncionario(vetor, nomeRemove));
              break;
      case 7:console.log(mediaSalarial(vetor));return;
      case 8:alert("Programa Encerrado");break;
      default:alert("Opção Inválida");return; 
    }
  } while (opcao != 4);
  console.log(vetor);  
}
main()