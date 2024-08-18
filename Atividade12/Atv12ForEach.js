const FormHasWords = {
    word1: '',
    word2: ''
};

function Word() {
    FormHasWords.word1 = word1;
    FormHasWords.word2 = word2;

    alert('Os dados foram salvos.');
}

function WordZn() {
    const word1 = document.getElementById("word1").value.toUpperCase();
    const word2 = document.getElementById("word2").value.toUpperCase();
    const word11 = document.getElementById("word1").value;
    const word22 = document.getElementById("word2").value;
    alert('As duas palavras são: ' + word11 + ', ' + word22 + '.');
    if (!word1) {
        return alert('Erro: Por favor, insira apenas palavras válidas, atualize essa página e tente novamente.');
    }
    if (!word2) {
        return alert('Erro: Por favor, insira apenas palavras válidas, atualize essa página e tente novamente.');
    }
    let linkingStrWord2 = true;
    for (let i = 0; i < word2.length; i++) {
        const eachchar = word2[i];
        if (word1.indexOf(eachchar) === -1){
            linkingStrWord2 = false;
            break;
        }
    }
    if (linkingStrWord2) {
        alert('A Segunda Palavra (' + word22 + ') é um Subconjunto da Primeira Palavra (' + word11 + ').');
    } else {
        let linkingStrWord1 = true;
        for (let i=0; i < word1.length; i++) {
            const eachletter = word1[i];
            if (word2.indexOf(eachletter) === -1) {
                linkingStrWord1 = false;
                break;
            }
        }
        if (linkingStrWord1) {
            alert('A Primeira Palavra (' + word11 + ') é um Subconjunto da Segunda Palavra (' + word22 + ').');
        } else {
            alert('As Palavras Não São Subconjuntos Entre Si Mesmas.');
        }
    }
}