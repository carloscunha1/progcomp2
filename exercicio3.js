let projetos = [];

for (let i = 0; i < 6; i++) {
    let nomeProjeto = prompt(`Informe o nome do projeto ${i + 1}:`);
    let empresa = prompt(`Informe o nome da empresa do projeto ${i + 1}:`).toLowerCase().replace(/[\s-]/g, '');
    let duracaoMeses = Number(prompt(`Informe a duração em meses do projeto ${i + 1}:`));
    let orcamento = Number(prompt(`Informe o orçamento do projeto ${i + 1}:`));

    let projeto = {
        nomeProjeto: nomeProjeto,
        empresa: empresa,
        duracaoMeses: duracaoMeses,
        orcamento: orcamento
    };

    projetos.push(projeto);
}

let maiorOrcamento = projetos[0];
let somaDuracao = 0;
let contaInovaTech = 0;
let somaOrcamentoMenosSeisMeses = 0;

for (let i = 0; i < projetos.length; i++) {
    if (projetos[i].duracaoMeses > 12 && projetos[i].orcamento > 1000000) {
        console.log("Projetos com duração maior que 12 meses e orçamento maior que 1 milhão:", projetos[i]);
    }
    if (projetos[i].orcamento > maiorOrcamento.orcamento) {
        maiorOrcamento = projetos[i];
    }
    somaDuracao = somaDuracao + projetos[i].duracaoMeses;
    if (projetos[i].empresa === "inovatech") {
        contaInovaTech++;
    }
    if (projetos[i].duracaoMeses < 6) {
        somaOrcamentoMenosSeisMeses = somaOrcamentoMenosSeisMeses + projetos[i].orcamento;
    }
}

let mediaDuracao = somaDuracao / projetos.length;

console.log("O projeto com o maior orçamento é:", maiorOrcamento.nomeProjeto, "-", maiorOrcamento.orcamento);
console.log("A media da duração dos projetos é:", mediaDuracao);
console.log("A quantidade de projetos da InovaTech é:", contaInovaTech);
console.log("O total gasto em projetos com duração menor que 6 meses é:", somaOrcamentoMenosSeisMeses);