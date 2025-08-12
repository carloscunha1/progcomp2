let empresa = [];

for (let i = 0; i < 6; i++) {
    let nome = prompt(`Informe o nome do funcionário ${i + 1}:`);
    let cargo = prompt(`Informe o cargo do funcionário ${i + 1}:`).toLowerCase();
    let salario = Number(prompt(`Informe o salário do funcionário ${i + 1}:`));
    let tempoServico = Number(prompt(`Informe o tempo de trabalho na empresa do funcionário ${i + 1}:`));
    
    let funcionario = {
        nome: nome,
        cargo: cargo,
        salario: salario,
        tempoServico: tempoServico
    };

    empresa.push(funcionario);
}

let maior = empresa[0];
let soma = 0;
let contaGerentes = 0

for (let i = 0; i < empresa.length; i++) {
    if (empresa[i].salario > 5000 && empresa[i].tempoServico > 5) {
        console.log("Funcionário com salário > 5000 e tempo > 5 anos:", empresa[i]);
    }

    if (empresa[i].salario > maior.salario) {
        maior = empresa[i];
    }
    soma = soma + empresa[i].salario;
    if (empresa[i].cargo === "gerente") {
        contaGerentes ++
    }
}

let media = soma/empresa.length
console.log("A quantidade de gerentes é:", contaGerentes);


console.log("O funcionário com o maior salário é:", maior.nome, "-", maior.salario);
console.log("A media dos salários é:", media);
