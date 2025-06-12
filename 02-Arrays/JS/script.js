    /* Vetore */
//===============================================================================================================================\\
//===============================================================================================================================\\

//Criando vetores com valores ja declarados
let numeros = [10,20,30];
let meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jul'];
let produtos = ['arroz', 'feijão', 'carne'];

//===============================================================================================================================\\

//Apresentando o array no console (Quandos novos itens são adicionados/removido posteriormente, não é possivel apresentar o momento em que o array tinha a quantidade anterior de valore)
console.log("Apresentando o array no console");
console.log(numeros);
console.log(meses);
console.log(produtos);

//===============================================================================================================================\\

//Apresentando o item da posição "[0]", ou seja o primeiro item, do vetor
console.log("Apresentando o item da posição '[0]', ou seja o primeiro item, do vetor");
console.log(numeros[0]);
console.log(meses[0]);
console.log(produtos[0]);

//===============================================================================================================================\\

//Adicionar itens no final da lista (Quandos novos itens são adicionados/removido posteriormente, não é possivel apresentar o momento em que o array tinha a quantidade anterior de valore)
numeros.push(40);
meses.push('jun');
produtos.push('ovo');

console.log("Apresentar o array com os itens adicionados no final da lista");
console.log(numeros);
console.log(meses);
console.log(produtos);

//===============================================================================================================================\\

//Remove itens no final da lista (Quandos novos itens são adicionados/removido posteriormente, não é possivel apresentar o momento em que o array tinha a quantidade anterior de valore)
numeros.pop();
meses.pop();
produtos.pop();

console.log("Apresentar o array com os itens removidos no final da lista");
console.log(numeros);
console.log(meses);
console.log(produtos);

//===============================================================================================================================\\

//Adicionar itens no inicio da lista (Quandos novos itens são adicionados/removido posteriormente, não é possivel apresentar o momento em que o array tinha a quantidade anterior de valore)
numeros.unshift(40);
meses.unshift('jun');
produtos.unshift('ovo');

console.log("Apresentar o array com os itens adicionados no final da lista");
console.log(numeros);
console.log(meses);
console.log(produtos);

//===============================================================================================================================\\

//Remove itens no inicio da lista (Quandos novos itens são adicionados/removido posteriormente, não é possivel apresentar o momento em que o array tinha a quantidade anterior de valore)
numeros.shift();
meses.shift();
produtos.shift();

console.log("Apresentar o array com os itens removidos no final da lista");
console.log(numeros);
console.log(meses);
console.log(produtos);

//===============================================================================================================================\\

//Remove itens especificos
let teste = [10,20,30,40,50,60,70,80,90,100]; //(0=10, 1=20, 2=30, 3=40, 4=50, 5=60, 6=70, 7=80, 8=90, 9=100)

teste.splice(3, 2); //(A partir da posição x remova x numeros) Em um array de 10 posições: apartir do 40 dois valore(40,50)

console.log("Apresentar o array sem os itens selecionados para remoção");
console.log(teste);

//===============================================================================================================================\\

//Copia itens de outro array
let testes = [10,20,30,40,50,60,70,80,90,100]; //(0=10, 1=20, 2=30, 3=40, 4=50, 5=60, 6=70, 7=80, 8=90, 9=100)

let teste1 = testes.slice() //Copia tudo
let teste2 = testes.slice(3,2) //(A partir da posição x copie x numeros) Em um array de 10 posições: apartir do 40 dois valore(40,50)
let teste3 = [...testes, 110, 120]; //Copia tudo e adiciona mais no final

console.log("Apresentar o array com os itens selecionados para copia");
console.log(teste1);
console.log(teste2); //não esta funcionando nessa versão
console.log(teste3);

//===============================================================================================================================\\
//===============================================================================================================================\\

//Criando vetores sem valores ja declarados
let numbers = new Array(5); // Cria um array com 5 posições vazias
let diasDaSemana = new Array(5); // Cria um array com 5 posições vazias
let mercadorias = new Array(5); // Cria um array com 5 posições vazias

//===============================================================================================================================\\

//Atribuir valores a posições específicas
numbers[0] = 10;
diasDaSemana[0] = 'segunda';
mercadorias[0] = 'teclado';

console.log("Apresentar o array");
console.log(numbers);
console.log(diasDaSemana);
console.log(mercadorias);

//===============================================================================================================================\\