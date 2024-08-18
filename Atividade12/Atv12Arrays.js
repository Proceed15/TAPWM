const FormHasData = {
    num1: '',
    num2: '',
    num3: ''
};

function Data(){
    FormHasData.num1 = num1;
    FormHasData.num2 = num2;
    FormHasData.num3 = num3;

    alert('Os dados foram salvos.');
}

function soma() {
    var soma = 0;
    for (var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
    }
    return soma;
}

function ArrayAn(){
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const num3 = parseInt(document.getElementById("num3").value);
    const array = [num1, num2, num3];
    alert('Os 3 números inseridos são: ' + array);

    if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
        return alert('Por favor, insira apenas números válidos, atualize essa página e tente novamente.');
    }
    const ArrayAn = soma.apply(null, array);
    const ArraySec = num2*num2;
    const ArrayThird = num3*num3;    
    return alert('Os 3 Números Somados são: ' + ArrayAn + '\n' + 'O Quadrado do Segundo Número é: ' + ArraySec + '\n' + 'O Quadrado do Terceiro Número é: ' + ArrayThird);
}
//Bônus: Verifica se os números são válidos antes de prosseguir com as operações.
