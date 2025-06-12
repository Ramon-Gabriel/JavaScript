// cadastro 
const botao = document.getElementById('btnCadastrar');
//let usuarios = [];

//Função de cadastro
botao.addEventListener('click',
    function () {
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const usuario = {
            login: document.getElementById('login').value,
            senha: document.getElementById('senha').value
        }

        const indexEditando = document.getElementById('indexEditar').value;
        if(indexEditando !== ""){
            usuarios[indexEditando] = usuario;
            document.getElementById('indexEditar').value = "";
        }else{
            usuarios.push(usuario);
        }

        let listaUsuarios = JSON.stringify(usuarios);
        localStorage.setItem("usuarios", listaUsuarios);

        document.getElementById('login').value = '';
        document.getElementById('senha').value = '';

        //Atualização da apresentação apos cada cadastro
        listar();
    }
);

function listar() {
    //Essa linha tem o objetivo de recuperar uma lista de usuários armazenada no navegador, e se não existir nada, usar uma lista vazia como padrão.
    const listaUsuarioCad = JSON.parse(localStorage.getItem("usuarios")) || [];

    //console.log(listaUsuarioCad);
    
    const tabelaListaUsuarios = document.getElementById('listaUsuarios');

    //Recarega a pagina para que os itens da tabela não se repitam mais de uma vez desnecessariamente
    tabelaListaUsuarios.innerHTML = "";

    //For diferenciado para percorer o vetor de usuarios(objetos/structs) e apresentalos no HTML
    listaUsuarioCad.forEach((usuario, index) => {
        const linha = document.createElement('tr');
        //HTML no JS
        linha.innerHTML = `
            <td>${usuario.login}</td>
            <td>${usuario.senha}</td>
            <td>
                <button onclick="editarUsuario(${index})">Editar</button>
                <button onclick="excluirUsuario(${index})">Remover</button>
            </td>
        `;
        tabelaListaUsuarios.appendChild(linha);
    });
}

function excluirUsuario(index) {
    const listaUsuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    if(confirm("Voce realmente deseja excluir ?")){
        listaUsuariosCadastrados.splice(index, 1);
        listaJson = JSON.stringify(listaUsuariosCadastrados);
        localStorage.setItem("usuarios", listaJson);
        listar();
    }
}

function editarUsuario(index){
    const listaUsuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = listaUsuariosCadastrados[index];
    document.getElementById('login').value = usuario.login;
    document.getElementById('senha').value = usuario.senha;
    document.getElementById('indexEditar').value = index;
}

//Primeira apresentação
listar();