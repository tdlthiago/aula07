function enviarNome(){
    //pegando o input do HTML
    let input = document.querySelector('input')

    //pegando o valor do input e colocando dentro da
    //variavel nome
    let nome = input.value

    //limpando o input
    input.value = ""

    //criando o elemento 'p'
    let nomeUsuario = document.createElement('p')

   //pegando o elemento p e colocando um texto na variável nome
    nomeUsuario.innerText = nome

    document.body.appendChild(nomeUsuario)
}