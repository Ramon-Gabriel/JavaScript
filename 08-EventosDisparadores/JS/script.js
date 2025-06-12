//Capturando ações dos botoes
//===========================================================================================//

//Passar o cursor por cima
//Pega a acão
let botao1 = document.getElementById("btn1");

//Executa a função apartir da ação
botao1.addEventListener("mouseover", function (){
    alert("Cursor sob o botão");
});
//===========================================================================================//

//Retirar o foco do botão (Use 'TAB')
//Pega a acão
let botao2 = document.getElementById("btn2");

//Executa a função apartir da ação
botao2.addEventListener("blur", function (){
    alert("Retirar o foco do botão");
});
//===========================================================================================//

//Clicar no botão
//Pega a acão
let botaoEnviar = document.getElementById("btn3");

//Executa a função apartir da ação
botaoEnviar.addEventListener("click", function (event){
    
    //Utiliza passagem de parametro "event" e procedimento abaixo para evitar o caregamento da pagina
    event.preventDefault();

    //Pega o valor enviado pelo "imput"
    const nome = document.getElementById("cxtexto").value;

    //Retorna o valor
    alert(nome);
});