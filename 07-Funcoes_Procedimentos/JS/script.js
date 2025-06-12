let titulo = document.getElementById("titulo");
titulo.textContent = "Função no JS";
let box = document.getElementById("box");
//===========================================================================================//
//Procedimento sem Parametro e sem Retorno
function apresentar01(){
    document.write("<p>Ola mundo sem retorno</p>");
}

//Função sem Parametro e com Retorno
function apresentar02(){
    return "<p>Ola mundo com retorno</p>";
}

//Chamada de Procedimento
apresentar01();

//Chamada de Função
document.write(apresentar02());
//===========================================================================================//
let frase = "Eu vou passar e fds";
let x = 10;
let y = 20;

//Procedimento com Parametro e sem Retorno
function somar01(a, b){
    document.write("<p>A soma 1º é " + (a + b) + ".</P>");
}

//Função com Parametro e com Retorno
function somar02(a, b){
    return a + b;
}

//Chamada de Procedimento
somar01(x, y);
somar01(5,10);

//Chamada de Função
document.write(`<p>A soma 2º é${somar02(x, y)}</p>`); 
document.write(`<p>A soma 2º é${somar02(5, 10)}</p>`); 
//===========================================================================================//
//Função anonima, usada com disparadores de eventos como botoes. Não possuem nome e usam variaveis para sua criação.
titulo.addEventListener('click', function (){
    alert('clicou no titulo');
});