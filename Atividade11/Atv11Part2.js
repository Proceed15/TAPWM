//Declarando as constantes para guardar dados
const FormHasData = {
    num1: '',
    num2: '',
    num3: '',
    num4: ''
};

function IsData2() {
    //Pega os valores do formulário adiconei parseInt para a conclusão sugerida da atividade
    //em aula e para facilitar a refatoração do código se necessária.
    //Não é necessário em primeira vista já que os campos no meu Forms só aceitam números
    //E uma formatação já é feita nas operações envolvendo Math.max.
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