const elementoChute = document.getElementById('chute');
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();
recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => recognition.start());
/*----------------*/
function onSpeak(e){
    var chute = e.results[0][0].transcript;
    if(chute == "game over"){
        document.body.innerHTML = `
            <h2>Fim de jogo.</h2>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
        document.body.style.backgroundColor = 'black';
        return;
    }
    exibeChuteNaTela(chute);
    verificaSeChuteEValido(chute);
}
function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `<div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}
