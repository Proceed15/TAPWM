const calcular = document.getElementById('calcular');


function imc () {
//value pega o valor do input tipo texto.
    const nome = document.getElementById('nome').value;

    const altura = document.getElementById('altura').value;

    const peso = document.getElementById('peso').value;

   const resultado = document.getElementById('resultado');

  //verificação.
  if (nome !== '' && altura !== '' && peso !== '') {

    const valorIMC = (peso / (altura * altura )).toFixed(1);
    //toFixed arredondar 1 casa decimal.
    let classificacao = '';

    if (valorIMC <18.5) {
      classificacao = 'abaixo do peso.';
    }

    else if (valorIMC < 25) {
      classificacao = 'com peso ideal.';
    }

    else if (valorIMC < 30) {
      classificacao = 'levemente acima do peso.';
    }

    else if ( valorIMC < 35) {
      classificacao = 'com obesidade grau 1.';
    }

    else if ( valorIMC < 40) {
      classificacao = 'com obesidade grau 2.';
    }
     else {
       classificacao = 'com obesidade grau 3 Alerta!';
     }

   //textContent para conteúdo dentro da div.
   resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
   }
   else {
     resultado.textContent = 'Preencha todos os campos!';
   }

}

calcular.addEventListener('click', imc);
