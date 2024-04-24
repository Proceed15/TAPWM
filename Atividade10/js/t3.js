// var triangleTracker = function(){
// var array=[];
//
// array.push(parseFloat(prompt('Digite o lado A')));
// array.push(parseFloat(prompt('Digite o lado B')));
// array.push(parseFloat(prompt('Digite o lado C')));
//
// if(isNaN(array[0]) === true || isNaN(array[1]) === true || isNaN(array[2]) === true){
// alert("Por favor, digite um número");
// }
// else if (array[0] === array[1] && array[1] === array[2]) {
//    alert("Equilátero!");
//    }
//    else  if (array[0] === array[1] || array[1] === array[2] || array[0] === array[2]) {
//       alert("Isósceles!");
//       }
//       else  if ( typeof array[0] !=="number" || typeof array[1] !=="number" ||typeof array[2] !=="number" ) {
//          alert("Por favor, digite um número");
//          }
//          else {
//           alert("Escaleno!");
//           }
//         }


function triangleTracker() {
    var lados = [];
    var naoNumero = false;

    lados.push(parseInt(prompt("Digite a medida do primeiro lado: ")));
        if (isNaN(lados[0]) || lados[0] < 1) {
        		naoNumero = true;
            while (naoNumero === true) {
            	lados[0] = parseInt(prompt("Digite um número válido para o primeiro lado. Você digitou um valor menor que um ou que não é um número em si."));
              if(lados[0] > 0){
              	naoNumero = false;
              }
            }
        }
    lados.push(parseInt(prompt("Digite a medida do segundo lado: ")));
    		if (isNaN(lados[1]) || lados[1] < 1) {
        		naoNumero = true;
            while (naoNumero === true) {
            	lados[1] = parseInt(prompt("Digite um número válido para o segundo lado. Você digitou um valor menor que um ou que não é um número em si."));
              if(lados[1] > 0){
              	naoNumero = false;
              }
            }
        }
    lados.push(parseInt(prompt("Digite a medida do terceiro lado: ")));
    		if (isNaN(lados[2]) || lados[2] < 1) {
        		naoNumero = true;
            while (naoNumero === true) {
            	lados[2] = parseInt(prompt("Digite um número válido para o terceiro lado. Você digitou um valor menor que um ou que não é um número em si."));
              if(lados[2] > 0){
              	naoNumero = false;
              }
            }
        }

        if ((lados[0] + lados[1]) <= lados[2] || (lados[1] + lados[2]) <= lados[0] || (lados[0] + lados[2]) <= lados[1]){
      alert("Isso não é um triângulo!");
        } else if (lados[0] === lados[1] && lados[1] === lados[2]) {
      alert("É um triângulo equilátero!");
        } else if (lados[0] === lados[1] || lados[0] === lados[2] || lados[2] ===	lados[1]) {
      alert("É um triângulo isósceles!");
        } else if ((lados[0] !== lados[1] && lados[0] !== lados[2]) || (lados[1] !== lados[2] && lados[1] !== lados[0]) || (lados[2] !== lados[1] && lados[2] !== lados[0]) ) {
      alert("É um triângulo escaleno!");
  }
}
