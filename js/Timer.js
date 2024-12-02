class Timer {
    constructor(slime, timerDisplay, timerLength) {
        this.timerDisplay = timerDisplay;
        this.timerLength = timerLength;
        this.timerDone = false;
        this.slime = slime;
    }

    // Starts the timer
    startTimer() {
        this.timerDisplay.fadeIn();
        this.timeLeft = this.timerLength;
        this.timerDisplay.find('h2').text(this.timeLeft);
        this.timerDone = false;

        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.timerDisplay.find('h2').text(this.timeLeft);

            if (this.timeLeft <= 0) {
                this.timerDone = true;
                this.timerDisplay.fadeOut();

                if (this.isTimerDone() && !slime.isAlive()) {
                    this.slime.respawn();
                }

                clearInterval(this.timerInterval);
            }

        }, 1000);
    }

    isTimerDone() {
        return this.timerDone;
    }
}

export default Timer;