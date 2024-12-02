class Slime {
    constructor(startingHp, hpBar, slimeBody) {
        this.totalHp = startingHp;
        this.currentHp = startingHp;
        this.hpBar = hpBar;
        this.slimeBody = slimeBody;

        this.updateHpBar();
    }

    /*
    --------------------------------------------------------------------------
        utility functions
    --------------------------------------------------------------------------
    */

    //respawns the slime
    respawn() {
        this.currentHp = this.totalHp;
        this.hpBar.fadeIn();
        this.slimeBody.fadeIn();
        this.updateHpBar();
    }

    //updates the slimes hp bar
    updateHpBar() {
        var remainingHp = this.currentHp / this.totalHp * 100;
        this.hpBar.find('#HPBar').width(remainingHp + '%');
    }

    /*
    --------------------------------------------------------------------------
        getters,setters,variable update function
    --------------------------------------------------------------------------
    */
    //applies damage to the slime
    takeDamage(damage) {
        if (this.currentHp > 0) {
            this.currentHp -= damage;
            this.updateHpBar();
        }
        if (this.currentHp <= 0) {
            this.hpBar.fadeOut();
            this.slimeBody.fadeOut();
        }
    }

    //returns if the slime is alive or not
    isAlive() {
        return this.currentHp > 0;
    }

}

export default Slime;