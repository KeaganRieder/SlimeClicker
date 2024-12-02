
class SlimeClicker {
    constructor(slime, timer) {
        this.slime = slime;
        this.timer = timer;

        this.slimeBallCount = 0;
        this.slimeDamage = 1;

        this.gameScreen = $('#GameScreen');
        this.slimeButton = $('#Slime');
        this.slimeBallCounter = $('#SlimeBallCount');

        this.slimeButton.on('click', function () { attackSlime() });
        this.gameScreen.hide();
    }
    /*
    --------------------------------------------------------------------------
      interaction
    --------------------------------------------------------------------------
    */
    //starts the game
    startGame() {
        console.log("game created and initialized");

        this.gameScreen.fadeIn();
    }

    attackSlime() {
        console.log("slime clicked");

        if (this.slime.isAlive()) {
            this.slime.takeDamage(this.slimeDamage);
            this.updateSlimeBallCount(this.slimeDamage);
        }

        if (!this.slime.isAlive()) {
            this.timer.startTimer();
        }
    }

    /*
    --------------------------------------------------------------------------
        getters/setters
    --------------------------------------------------------------------------
    */

    //returns the amount of slime balls
    getSlimeBallCount() {
        return this.slimeBallCount;
    }

    // updates the amount of slimes balls the player has and 
    // the counter
    updateSlimeBallCount(amt) {
        this.slimeBallCount = this.slimeBallCount + amt;
        this.slimeBallCounter.text(" : " + this.slimeBallCount);
    }

    //increase amount of dmg dealt and slime balls gotten per click
    increaseSlimeDmg(amt) {
        this.slimeDamage = this.slimeDamage + amt;
    }
}

export default SlimeClicker;