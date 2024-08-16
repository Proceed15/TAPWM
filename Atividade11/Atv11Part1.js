//Declarando as constantes para guardar dados
const FormHasData = {
    num1: '',
    num2: '',
    num3: '',
    num4: ''
};

function IsData() {
    //Pega os valores do formulário
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);
    const num4 = parseInt(document.getElementById('num4').value);

    //Salvando os dados validados
    FormHasData.num1 = num1;
    FormHasData.num2 = num2;
    FormHasData.num3 = num3;
    FormHasData.num4 = num4;

    //Mostre uma mensagem de confirmação
    alert('Os dados estão salvos')

}

function IsBigger() {
    // Checando se os dados realmente existem
    if (FormHasData.num1 && FormHasData.num2 && FormHasData.num3 && FormHasData.num4) {
        alert('Valores informados para os números 1: ' + FormHasData.num1 + ', 2: ' + FormHasData.num2 + ', 3: ' + FormHasData.num3 + ' e 4: ' + FormHasData.num4);
        const num1 = parseInt(document.getElementById('num1').value);
        const num2 = parseInt(document.getElementById('num2').value);
        const num3 = parseInt(document.getElementById('num3').value);
        const num4 = parseInt(document.getElementById('num4').value);
        
        
        if (num1 > num2) {
            if (num1 > num3) {
                if (num1 > num4) {
                    alert(FormHasData.num1 + ' é o maior número.');
                }
                else {
                    alert(FormHasData.num4 + ' é o maior número.');
                }
            }
            else {
                if (num3 > num4){
                    alert(FormHasData.num3 + ' é o maior número.');
                }
                else {
                    alert(FormHasData.num4 + ' é o maior número.');
                }
            }
        } else {
            if (num2 > num3) {
                if (num2 > num4) {
                    alert(FormHasData.num2 + ' é o maior número.');
                }
                else {
                    alert(FormHasData.num4 + ' é o maior número.');
                }
            }
            else {
                if (num3 > num4) {
                    alert(FormHasData.num3 + ' é o maior número.');
                }
                else {
                    alert(FormHasData.num4 + ' é o maior número.');
                }
            }
        }
    } else {
        alert('Os dados não foram informados corretamente')
    }
    //alert("This Works!");
}

function IsMaximized() {
    // Checando se os dados realmente existem
    if (FormHasData.num1 && FormHasData.num2 && FormHasData.num3 && FormHasData.num4) {
        alert('Valores informados para os números 1: ' + FormHasData.num1 + ', 2: ' + FormHasData.num2 + ', 3: ' + FormHasData.num3 + ' e 4: ' + FormHasData.num4);
        const ArrayNum = [FormHasData.num1, FormHasData.num2, FormHasData.num3, FormHasData.num4];
        //Converti os valores em um array e os utilizei com math.max.apply
        //Para retornar os dados necessários.
        const MaxNum = Math.max.apply(Math, ArrayNum);
        alert(MaxNum + ' é o maior número.');
    } else {
        alert('Os dados não foram informados corretamente')
    }
    //alert("This Works!");
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
