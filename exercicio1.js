let biblioteca = [];

    let titulo = prompt(`Informe o titulo do livro ${i + 1}:`);
    let autor = prompt(`Informe o autor do livro ${i + 1}:`);
    let ano = Number(prompt(`Informe o ano da publicação do livro ${i + 1}:`));
    let paginas = Number(prompt(`Informe a quantidade de páginas do livro ${i + 1}:`));
    
let livro = {
        titulo: titulo,
        autor: autor,
        ano: ano,
        paginas: paginas
    };
    biblioteca.push(livro);

    let maior = biblioteca[0]
    let soma = 0
    for (let i = 0; i < biblioteca.length; i++) {
       if (biblioteca[i].paginas > 300) {
        console.log(biblioteca[i]);
       }
       if (biblioteca[i] > maior.paginas) {
        maior = biblioteca[i]
       }
       soma = soma + biblioteca[i].paginas
}

console.log("O título do livro com mais páginas é:", maior.titulo);
console.log("A soma da página dos livros é:", soma);

