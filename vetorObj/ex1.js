function listarNomes(alunos) {
  for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome);
  }
}

function aumentarIdade(alunos) {
  for (let aluno of alunos) {
    aluno.idade += 1
  }
}

function cadastroInicial(alunos) {
  alunos.push({ nome: "Ana", idade: 21, curso: "ES" })
  alunos.push({ nome: "Carlos", idade: 23, curso: "Engenharia" })
  alunos.push({ nome: "Beatriz", idade: 20, curso: "Medicina" })
}

function cadastraNovo(alunos) {
  nome = prompt("Digite o nome do novo aluno")
  idade = Number(prompt("Digite a idade do novo aluno"))
  curso = prompt("Digite o curso do novo aluno")

  alunos.push({nome, idade, curso})
}

function removeAluno(alunos, nomeAluno) {
  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nome == nomeAluno) {
      alunos.splice(i, 1)
      return
    }
  }
  alert("Aluno não encontrado")
}

function main() {
  let vetor = []
  cadastroInicial(vetor) //Faz o cadastro inicial
  let opcao
  do {
    opcao = Number(prompt("1 - Cria Aluno\n2 - Lista Nomes\n3 - Aumentar Idade\n4 - Remover Aluno\n5 - Sair"))
    switch (opcao) {
      case 1:cadastraNovo(vetor);break;
      case 2:listarNomes(vetor);break;
      case 3:aumentarIdade(vetor);break;
      case 4: let nomeRemove = prompt("Informe o nome do aluno a ser resumido:")
              removeAluno(vetor, nomeRemove);
              break;
      case 5:alert("Programa Encerrado");break;
      default:alert("Opção Inválida");break; 
    }
  } while (opcao != 4);
  console.log(vetor);  
}
main()