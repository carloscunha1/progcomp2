//Array fixo de objetos e for para mostrar modelos que custam mais que 2250
let carros = [
    {
        marca: "Corvette",
        modelo: "Corvette C6 ZR1",
        cor: "Azul",
        preco: 1450.00
    },
    {
        marca: "Dodge",
        modelo: "Dodge SRT Demon 180",
        cor: "Vermelho",
        preco: 3000.00
    },
    {
        marca: "Chevrolet",
        modelo: "Camaro",
        cor: "Preto",
        preco: 2250
    },
    ]

    for (let i = 0; i < carros.length; i++) {
        if (carros[i].preco > 2250) {
            console.log(`${carros[i].modelo} custa mais que 2250.`);
        }
    }

    //Código para inserção de objetos dentro do array via alert
    let garagem = [];

for (let i = 0; i < 3; i++) {
    let marca = prompt(`Informe a marca do carro ${i + 1}:`);
    let modelo = prompt(`Informe o modelo do carro ${i + 1}:`);
    let cor = Number(prompt(`Informe a cor do carro ${i + 1}:`));
    let preco = Number(prompt(`Informe o preço docarro ${i + 1}:`));

    let carro = {
        marca: marca,
        modelo: modelo,
        cor: cor,
        preco: preco
    };
    garagem.push(carro);
}

