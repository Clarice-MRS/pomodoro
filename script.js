const startingMinutes = 25;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('timer');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds.toString().padStart(2, "0");

    countdownEl.innerHTML = `${minutes}:${seconds}`
    time--;
}

/*
iniciar quando clicar no botão
poder voltar do começo
poder alterar pausa
adicionar toque quando a pausa começar
poder configurar tempo
entender porque faz 25 25 24
*/