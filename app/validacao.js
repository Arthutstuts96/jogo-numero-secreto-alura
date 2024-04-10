function verificaSeChuteEValido(chute){
    const numero = +chute;

    if(numeroEInvalido(numero)){
        elementoChute.innerHTML += `
            <div>Valor inválido!</div>
        `;
        return;
    }
    if(numeroEstaEntreOsValores(numero)){
        elementoChute.innerHTML += `
            <div>O número deve estar entre ${menorValor} e ${maiorValor}</div>
        `;
        return;
    }
    if(numero == numeroSecreto){
        document.body.innerHTML = `
            <h2>Parabéns você acertou!!!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `;
    }else{
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `;
    }
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
});
/**8888888888888888888888888888 */
function numeroEInvalido(numero) {
    return Number.isNaN(numero);
}
function numeroEstaEntreOsValores(numero){
    return numero > maiorValor || numero < menorValor;
}
