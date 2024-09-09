// adiciona item no nó
function adicionaItem(nome) {
    document.getElementById('Lista').innerHTML += "<li>" + nome + "</li>";
    };
    // mostra os dados do nó
    function mostraNo(item) {
    alert("Valor innerHTML do principal(Lista)" + 
    document.getElementById(item).innerHTML);
    alert("Nome da tag Nó " + document.getElementById(item).nodeName);
    alert("Name do Nó + document.getElementById(item).getAttribute(name)");
    // se fosse button por exemplo o value seria o texto, input o texto digitado
    // no caso parágrafo não tem value
    alert("value do Nó " + document.getElementById(item).nodeValue);
    //HTML DOM – Exemplo 3 (3) -
    //UsandoDOM3Nos.js
    //pai
    alert("Parent " + 
    document.getElementById(item).parentNode.nodeName);
    // o primeiro filho de elemento parágrafo é tipo texto
    alert("Primeiro Filho " + 
    document.getElementById(item).firstChild.innerHTML + " type " + 
    document.getElementById(item).firstChild.nodeType);
    document.getElementById(item).firstChild.nodeValue;
    alert("Filho posicao 1 " + 
    document.getElementById(item).childNodes[1].innerHTML);
};
    