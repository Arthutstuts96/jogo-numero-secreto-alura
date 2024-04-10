const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

const elementoMenor = document.getElementById('menor-valor');
const elementoMaior = document.getElementById('maior-valor');

elementoMenor.textContent = menorValor;
elementoMaior.textContent = maiorValor;
/* =================== */
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor) + menorValor;
}