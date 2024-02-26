document.addEventListener("DOMContentLoaded", () => {
    const intervalId = setInterval(updateCountdown, 1000);
    const countdownSpan = document.getElementById("countdown");

    function updateCountdown() {
        const today = new Date();
        let myBirthday = new Date("Dec 08 2024 00:00:00");

        const timeLeft = myBirthday.getTime() - today.getTime();
        updateCountdownDisplay(timeLeft);

        if (timeLeft < 0) {
            clearInterval(intervalId);
            countdownSpan.innerHTML = "0 meses, 0 dias, 0 horas, 0 minutos e 0 segundos, pois meu aniversário foi 08/12/2024 e agora tenho 20 anos!";
            document.getElementById("clear").innerHTML = "";
        }
    }

    function updateCountdownDisplay(timeLeft) {
        const seconds = Math.floor(timeLeft / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);

        countdownSpan.innerHTML = `${months} meses, ${days % 30} dias, ${hours % 24} horas, ${minutes % 60} minutos e ${seconds % 60} segundos`;
    }
});