let respostas = [];
 
function adicionarResposta() {
const idade = parseInt(document.getElementById("idade").value);
const sexo = document.querySelector('input[name="sexo"]:checked').value;
const opiniao = parseInt(document.getElementById("opiniao").value);
const arrFrobj = Object.keys(respostas);
const last = arrFrobj.slice(-1);
//++last[1];
//const last = respostas[respostas.length - 1];
//const QuerySel = document.querySelectorAll(arrFrobj).length;
//let numRes = 0;
//var respondido = 0;
 
respostas.push({ idade, sexo, opiniao, arrFrobj, last });
//respondido e numRes --> Método antigo.
 
calcularEExibirResultados();
}
 
function calcularEExibirResultados() {
const idades = respostas.map(resposta => resposta.idade);
const somaIdades = idades.reduce((acc, idade) => acc + idade, 0);
 
const mediaIdade = (somaIdades / respostas.length).toFixed(0);;
document.getElementById("mediaIdade").textContent = mediaIdade;
 
const idadeAvancada = Math.max(...idades);
document.getElementById("idadeAvancada").textContent = idadeAvancada;
 
const idadeJovem = Math.min(...idades);
document.getElementById("idadeJovem").textContent = idadeJovem;
 
const qtdPessimo = respostas.filter(resposta => resposta.opiniao === 1).length;
document.getElementById("qtdPessimo").textContent = qtdPessimo;
 
const qtdOtimoBom = respostas.filter(resposta => resposta.opiniao >= 3).length;
const porcentagemOtimoBom = ((qtdOtimoBom / respostas.length) * 100).toFixed(0);
document.getElementById("porcentagemOtimoBom").textContent = porcentagemOtimoBom;
 
const qtdMulheres = respostas.filter(resposta => resposta.sexo === "feminino").length;
document.getElementById("qtdMulheres").textContent = qtdMulheres;
 
const qtdHomens = respostas.filter(resposta => resposta.sexo === "masculino").length;
document.getElementById("qtdHomens").textContent = qtdHomens;

//const numeroRes = respostas.map(resposta => resposta.respondido++);

/*
for (const key in respostas){
    length++;
}
*/

const qtdPessoas = respostas.map(respostas => respostas.last);
document.getElementById("qtdPessoas").textContent = qtdPessoas;
//NumeroRes e length --> métodos antigos.
}
