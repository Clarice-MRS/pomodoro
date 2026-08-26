const startingMinutes = 25;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('timer');

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds.toString().padStart(2, "0");

    countdownEl.innerHTML = `${minutes}:${seconds}`
    time--;
}

function iniciarContagem(){

    const iniciar = document.getElementById("iniciar-timer");

    iniciar.addEventListener("click", updateCountdown);

    setInterval(updateCountdown, 1000); 
}


/*

iniciar quando clicar no botão

se clica no botão iniciar depois de já iniciado ele aumenta essa condição setInterval(updateCountdown, 1000); 

poder voltar do começo

poder alterar pausa

adicionar toque quando a pausa começar

poder configurar tempo

entender porque faz 25 25 24

*/