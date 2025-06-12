//===========================================================================================//
    /* Structs/Objetos */

//Struct Simples de variavel (Usa-se : aoinves de = para se atribuir um valor a um objeto/struct em JS)
let pessoa1 = {
    nome: "Jao",
    idade: 19,
    peso: 75.6,
    altura: 1.74,
    doador: true
}

//Struct Simples de constante (Usa-se : aoinves de = para se atribuir um valor a um objeto/struct em JS)
const pessoa2 = {
    nome: "Jao",
    idade: 19,
    peso: 65.5,
    altura: 1.74,
    doador: true
}

//Struct Com vetor
//Os valores são adicionados com os comandos push e unshift (Fim e Começo), e removidos com pop e shift (Fim e Começo)
let produto = {
    descricao : [],
    preco : [10,20,30]
}
//===========================================================================================//
//Chamada do vetor
//Acontece como em C, basta colocar a palavra chave do objeto/struct e um ponto, ".", na frente, e então o nome da variavel/constante que quer trabalhar

//Adicionar Valor
pessoa1.nome = "Joao";
//pessoa2 é uma constante, por isso não se pode mudar valores ja estabelecidos.
produto.descricao = [10, 20 ,30];
produto.preco[3] = 40;


//Acessar valor
console.log(pessoa1.nome);
console.log(pessoa2.peso);
console.log(produto.descricao[1]);
console.log(produto.preco);