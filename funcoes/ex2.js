function alterarVetor(V) {
    V[0] = 100;
};

function main() {
    let numeros = [10, 20, 30];
    alterarVetor(numeros);
    console.log(numeros); 
}

main()
