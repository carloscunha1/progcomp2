function totalVendas(vetor) {
    let totalInformatica = 0
    let totalModa = 0
    let totalEducacao = 0
    let totalMaior = 0; let categoriaMaior = ""

    vetor.forEach((item) => {
        if (item.categoria == "Informática") {
        totalInformatica += item.quantidade * item.valor
        if (totalInformatica > totalMaior) {
            totalMaior = totalInformatica; categoriaMaior = "Informática"
        }
         }
         else if (item.categoria == "Moda") {
        totalModa += item.quantidade * item.valor
        if (totalModa > totalMaior) {
            totalMaior = totalModa; categoriaMaior = "Moda"
        }
         }
         else if (item.categoria == "Educação") {
        totalEducacao += item.quantidade * item.valor
        if (totalEducacao > totalMaior) {
            totalMaior = totalEducacao; categoriaMaior = "Educação"
         }
        }
    });
    console.log(`Total de informática ${totalInformatica}`);
    console.log(`Total de Moda ${totalModa}`);
    console.log(`Total de Educação ${totalEducacao}`);
    console.log(`Categoria mais vendida: ${categoriaMaior} \n Valor vendido na categoria: ${totalMaior}`);

    
}

function main() {

let vendas = [
    { produto: "Notebook", categoria: "Informática", valor: 3500, quantidade: 2 },
    { produto: "Mouse", categoria: "Informática", valor: 80, quantidade: 5 },
    { produto: "Camiseta", categoria: "Moda", valor: 50, quantidade: 10 },
    { produto: "Tênis", categoria: "Moda", valor: 250, quantidade: 4 },
    { produto: "Livro", categoria: "Educação", valor: 40, quantidade: 7 },
    { produto: "Tablet", categoria: "Informática", valor: 1500, quantidade: 1 }
];
    totalVendas(vendas) 
}

main()