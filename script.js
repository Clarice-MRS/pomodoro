const startingMinutes = 25;
let time = startingMinutes * 60;
let interval = null; 

const countdownEl = document.getElementById('timer');
const startButton = document.getElementById("iniciar-timer");
const resetButton = document.getElementById("resetar-timer");
const startText = document.getElementById("texto-iniciar");
const startIcon = document.getElementById("icone-iniciar");

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds.toString().padStart(2, "0");

    countdownEl.innerHTML = `${minutes}:${seconds}`
    time--;
}

function startOrPause() {
    if (interval === null) {
        if (time <= 0) {
            return;
        }

        interval = setInterval(updateCountdown, 1000);
        startIcon.textContent = "⏸";
        startText.textContent = "Pausar";
    } else {
        clearInterval(interval);
        interval = null;

        startIcon.textContent = "▶";
        startText.textContent = "Continuar";
    }
}

function resetTimer() {
    clearInterval(interval);
    interval = null;

    time = startingMinutes * 60;
    countdownEl.textContent = "25:00";

    startIcon.textContent = "▶";
    startText.textContent = "Iniciar";
}

startButton.addEventListener("click", startOrPause);
resetButton.addEventListener("click", resetTimer);

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
