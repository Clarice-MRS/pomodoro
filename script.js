const startingMinutes = 25;
let time = startingMinutes * 60;
let interval = null; 

const countdownEl = document.getElementById('timer');
const iniciar = document.getElementById("iniciar-timer");

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds.toString().padStart(2, "0");

    countdownEl.innerHTML = `${minutes}:${seconds}`
    time--;
}

function iniciarContagem(){

    if (interval === null && time > 0) {
        interval = setInterval(updateCountdown, 1000);
    } if (terminarContagem())

    iniciar.addEventListener("click", iniciarContagem);
}

function terminarContagem(){
    if (time === 0) {
        clearInterval(setInterval(updateCountdown, 1000));
    }
}


/*

parar quando chegar no zero

se clica no botão iniciar depois de já iniciado ele aumenta essa condição setInterval(updateCountdown, 1000); 

poder voltar do começo

poder parar o temporizador

poder alterar pausa

adicionar toque quando a pausa começar

poder configurar tempo

entender porque faz 25 25 24

*/