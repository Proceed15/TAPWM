//Declarando as constantes para guardar dados
const formHasData = {
    num1: '',
    num2: '',
    num3: '',
    num4: ''
};

function IsData() {
    //Pega os valores do formulário
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;
    const num4 = document.getElementById('num4').value;

    //Salvando os dados validados
    formHasData.num1 = num1;
    formHasData.num2 = num2;
    formHasData.num3 = num3;
    formHasData.num4 = num4;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    num4 = parseInt(num4);

    //Mostre uma mensagem de confirmação
    alert('Os dados estão salvos')

}

function IsBigger() {
    // Checando se os dados realmente existem
    if (formHasData.num1 && formHasData.num2 && formHasData.num3 && formHasData.num4) {
        alert('Valores informados para os números 1: ' + formHasData.num1 + ', 2: ' + formHasData.num2 + ', 3: ' + formHasData.num3 + ' e 4: ' + formHasData.num4);
        const num1 = parseInt(document.getElementById('num1').value);
        const num2 = parseInt(document.getElementById('num2').value);
        const num3 = parseInt(document.getElementById('num3').value);
        const num4 = parseInt(document.getElementById('num4').value);
        
        if (num1 > num2) {
            if (num1 > num3) {
                if (num1 > num4) {
                    alert(formHasData.num1 + ' é o maior número.');
                }
                else {
                    alert(formHasData.num4 + ' é o maior número.');
                }
            }
            else {
                if (num3 > num4){
                    alert(formHasData.num3 + ' é o maior número.');
                }
                else {
                    alert(formHasData.num4 + ' é o maior número.');
                }
            }
        } else {
            if (num2 > num3) {
                if (num2 > num4) {
                    alert(formHasData.num2 + ' é o maior número.');
                }
                else {
                    alert(formHasData.num4 + ' é o maior número.');
                }
            }
            else {
                if (num3 > num4) {
                    alert(formHasData.num3 + ' é o maior número.');
                }
                else {
                    alert(formHasData.num4 + ' é o maior número.');
                }
            }
        }
    } else {
        alert('Os dados não foram informados corretamente')
    }
    //alert("This Works!");
}