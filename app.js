function startTimer(duration, displayId, endMessage = "Tiempo terminado") {
    let timer = duration, minutes, seconds;
    const display = document.getElementById(displayId);
    let interval;
    
    // Función para comenzar o reiniciar el temporizador
    function start() {
        interval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(interval);
                display.textContent = endMessage;
            }
        }, 1000);
    }

    // Función para detener el temporizador en cualquier momento
    function stopTimer() {
        clearInterval(interval);
        display.textContent = "Temporizador detenido";
    }

    // Función para reiniciar el temporizador
    function resetTimer() {
        clearInterval(interval);
        display.textContent = "00:00";
    }

    // Iniciar el temporizador
    start();

    // Retornar las funciones para poder detener o reiniciar desde afuera
    return {
        stop: stopTimer,
        reset: resetTimer
    };
}
