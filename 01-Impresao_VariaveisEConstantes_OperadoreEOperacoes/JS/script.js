//===========================================================================================//
    /* Formas de impresão simples */

//Forma simples de imprimir uma mensagem/variavel na tela do navegador
document.write("ola mundo");

//Forma simples de imprimir uma mensagem/variavel no console da pagina
console.log("ola mundo");

//Forma simples de imprimir uma mensagem com popup de alerta
alert("ola mundo");
//===========================================================================================//
    /* Criação de variaveis */
//Usa-se "let" para de declarar uma variavel, não possuem tipo especifico.

//Caracter/String
//Em front não ha diferença entre "" e '', pode-se usar conforme gosto, ou por priorização. Ex: "ele disse 'não' para ela"
let textos = "ola mundo";
let textos2 = 'ola mundo';

//Numeros Inteiros/Quebrados
let numerosInteiros = 19;
let numerosFracionados = 19.5; 

//Boleanos verdadeiro/falso
let ehDoador = true;
let ehReceptor = false;

//Vazio e atribuição NULL
let teste = null;
teste = "algo";
//===========================================================================================//
    /* Criação de constantes */
//Em tese, funcionam de maneira igual as variaveis a cima, mas seus valores são fixos (inalterados)

const BURROS = "a tera é plana";
const PI = 3.14;
const EU_SOU_FODA = true;
//===========================================================================================//
    /* Formas de impresão com valores */

document.write("<p> Mensagem1 de: " + textos + "</p>");
// document.write('Mensagem2 de: ${textos2}'); deveria funcionar
document.write("Mensagem2 de: " + textos2);
document.write("<p> Mensagem3 de: " + numerosInteiros + "</p>");
document.write("Mensagem4 de: " + numerosFracionados);
document.write("<p> Mensagem5 de: " + ehDoador + "</p>");
document.write("Mensagem6 de: " + ehReceptor);
document.write("<p> Mensagem7 de: " + teste + "</p>");
document.write("Mensagem8 de: " + BURROS);
document.write("<p> Mensagem9 de: " + PI + "</p>");
document.write("Mensagem10 de: " + EU_SOU_FODA);
//===========================================================================================//
    /* Operadores e Operações */
//Seram impressas no console para facilitar
//Cada operação de console chamada no codigo, "console.log", gera um novo paragrafo

let n1 = 10;
let n2 = 2;
let n3 = "2";

//Operadores de Calculo
console.log("Operadores de Calculo");
console.log(n1 + n2); //Adição
console.log(n1 - n2); //Subitração
console.log(n1 * n2); //Multiplicação
console.log(n1 / n2); //Divisão
console.log(n1 % n2); //Modulo ou Resto de Divisão

//Operadores de Comparação
console.log("Operadores de Comparação");
console.log(n2 == n3); //(... é igual a ...) Compara "visualmente" valores. Ex: int 2 é igual a string "2" pois ambos são o "mesmo ser/dado" (Conteudos iguais)
console.log(n2 === n3); //(... é identico a ...) Compara, com exatidão, valores. Ex: int 2 não é igual a string "2" pois ambos são de tipos diferentes (Tipos diferentes)
console.log(n2 != n3); //(... é diferente de ...) Compara "visualmente" valores. Ex: int 2 não é diferente de string "2" pois ambos são o "mesmo ser/dado" (Conteudos iguais)
console.log(n2 !== n3); //(... não é identico a ...) Compara , com exatidão, valores. Ex: int 2 não é identico a string "2" pois ambos são de tipos diferentes (Tipos diferentes)

//Operadore logicos
//Utiliza a logica da tabela verdade

let a = true;
let b = false;

console.log("Operadore logicos");
//Quando se usa && em dua variaveis boleanas, elas só retornaram verdadeiro se ambas forem verdadeiras
console.log(a && b); //(... e ...) Verdadeiro e Falso = falso
//Quando se usa || em dua variaveis boleanas, elas retornaram verdadeiro se pelo menos uma for verdadeira
console.log(a || b);//(... ou ...) Verdadeiro ou Falso = verdadeiro
//Quando se usa ! em uma variavel boleana, seu valor é invertido
console.log(!a);//(Verdadeiro vira falso)
console.log(!b);//(Falso vira verdadeiro)