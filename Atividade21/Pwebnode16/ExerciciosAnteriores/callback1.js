const prompt = require('prompt-sync')();
// Não esquecer de instalar
// npm install prompt-sync
function saudacao(nome) {
    console.log('Oi ' +nome +'!')
}

function entradaNome(callback) {
    var nome = prompt('Digite seu nome: ')
    callback(nome);
    //Chamando a função callback (saudacao)
}

entradaNome(saudacao);

// Obter o nome do usuário através de uma caixa de diálogo e, 
// em seguida, chamar a função de retorno (callback) fornecida como parâmetro,
// passando o nome digitado como argumento