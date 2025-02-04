let amigos = [];
let lista = [];

function validarNome() {
    let nome = document.querySelector('input').value;
    if (nome == '') {
        alert("Por favor, digite um nome válido!!");
    }
    else {
        console.log(`O nome ${nome} é válido`);
        amigos.push(nome);
        aparecerNomeAmigo();
        limparCampo();
    }
}

function aparecerNomeAmigo() {
    let listaAmigos = document.querySelector('#listaAmigos');
    for (let i = 0; i < amigos.length; i++) {
        lista[i] = `<li>${amigos[i]}</li>`;
        listaAmigos.innerHTML = lista;
    }
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
    console.log(amigos);
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let index = parseInt(Math.random() * amigos.length + 1);
        let amigoSecreto = amigos[index];
        let resultado = document.querySelector('#resultado');
        resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSecreto}</li>`;
        reiniciar();
    }
    else {
        validarNome();
    }
}

function reiniciar() {
    console.log("Reiniciando...")
    lista = [];
    amigos = [];
    aparecerNomeAmigo();
}