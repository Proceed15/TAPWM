//Declarando as constiáveis para guardar dados
const FormHasData = {
    num1: '',
    num2: '',
    num3: '',
    num4: ''
};

function IsData3() {
    //Pega os valores do formulário
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;
    const num4 = document.getElementById('num4').value;

    //Salvando os dados validados
    FormHasData.num1 = num1;
    FormHasData.num2 = num2;
    FormHasData.num3 = num3;
    FormHasData.num4 = num4;

    //Mostre uma mensagem de confirmação
    alert('Os dados estão salvos')

}

function BeCrescent() {
    // Checando se os dados realmente existem
    if (FormHasData.num1 && FormHasData.num2 && FormHasData.num3 && FormHasData.num4) {
      alert('Valores informados para os números 1: ' + FormHasData.num1 + ', 2: ' + FormHasData.num2 + ', 3: ' + FormHasData.num3 + ' e 4: ' + FormHasData.num4);
  
      // Convertendo os valores para números inteiros
      const num1 = parseInt(FormHasData.num1);
      const num2 = parseInt(FormHasData.num2);
      const num3 = parseInt(FormHasData.num3);
      const num4 = parseInt(FormHasData.num4);
  
      // Ordenando os números em ordem crescente com a função Sort(Pesquisei e achei essa função mais fácil aqui)
      //Criei um array ordenando esse números
      const ordenados = [num1, num2, num3, num4].sort((a, b) => a - b);
  
      // Exibindo a ordem crescente ordenados com join ()
      alert('A ordem crescente é: ' + ordenados.join(', '));
    } else {
      alert('Os dados não foram informados corretamente');
    }
  }