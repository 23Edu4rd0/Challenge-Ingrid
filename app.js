let amigos = [];

function validarNome() {
    let nome = document.querySelector('#nomeAdicionado').value;
    if (amigos.includes(nome)){
        alert(`O nome ${nome} já foi adicionado`);
    }
    else if(nome == '') {
        alert("Por favor, digite um nome válido!!");
    }
    else {
        amigos.push(nome);
        limparListas();
        aparecerNomeAmigo();
        limparCampo('nomeAdicionado');
    }
}

function removerNome() {
    let nomeAmigo = document.querySelector('#nomeRemovido').value;
    if (amigos.includes(nomeAmigo)){
        amigos = amigos.filter(amigo => amigo != nomeAmigo);
        alert(`O amigo ${nomeAmigo} foi excluído com sucesso!`);
        limparCampo('nomeRemovido');
        limparListas();
        aparecerNomeAmigo();
    }
    else if (nomeAmigo == '') {
        alert("Nenhum nome selecionado");
        limparCampo('nomeRemovido');
    }
    else {
        alert(`O nome ${nomeAmigo} não foi adicionado!`);
    }
}

function aparecerNomeAmigo() {
    let listaAmigos = document.querySelector('#listaAmigos');
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function limparListas(){
    document.querySelector('#listaAmigos').innerHTML = "";
    document.querySelector('#resultado').innerHTML = "";
}

function limparCampo(campo) {
    nome = document.getElementById(campo);
    nome.value = '';
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let index = parseInt(Math.random() * amigos.length);
        let amigoSecreto = amigos[index];
        let resultado = document.querySelector('#resultado');
        resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSecreto}</li>`;
    }
    else {
        validarNome();
    }
}

function novoSorteio() {
    limparListas();
    amigos = [];
}