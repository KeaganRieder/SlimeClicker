/*
--------------------------------------------------------------------------
    js file for defining what a slime is
--------------------------------------------------------------------------
*/
class Slime {
    constructor(name, health, healthIncreaseAmt) {
        this.name = name;

        this.totalHealth = health;
        this.currentHealth = health;
        this.healthIncreaseAmt = healthIncreaseAmt;


        this.isAlive = true;

        this.healthBar = $('#HPContainer');
        this.healthTxt = this.healthBar.find('h4');
        this.healthDisplay = $('#HPBar');

        this.damageTimer;

        this.imgPath = "images/slime_";
        this.imgExtension = ".png";

        this.body = $('#SlimeSection').find('#Slime').find('img');
    }

    //updates the health bar
    updateHealthBar() {
        var healthPercentage = this.currentHealth / this.totalHealth * 100;
        this.healthDisplay.width(healthPercentage + '%');
        this.healthTxt.text(this.name + ': ' + this.currentHealth + '/' + this.totalHealth);
    }

    //deals damage to the slime
    takeDamage(damage) {
        clearTimeout(this.damageTimer);

        if (this.isAlive) {
            this.currentHealth -= damage;

            var path = this.imgPath + "hit" + this.imgExtension;
            this.body.attr('src', path);

            if (this.currentHealth <= 0) {

                var path = this.imgPath + "dead" + this.imgExtension;
                this.body.attr('src', path);

                this.currentHealth = 0;
                this.isAlive = false;
                this.body.fadeOut(500);
                this.healthBar.fadeOut();

                setTimeout(() => {
                    this.isAlive = true;
                    var path = this.imgPath + "norm" + this.imgExtension;
                    this.body.attr('src', path);
                    this.updateHealthBar();

                }, 500);
            }

            else {
                this.damageTimer = setTimeout(() => {
                    var path = this.imgPath + "norm" + this.imgExtension;
                    this.body.attr('src', path);
                }, 1000);
            }

            this.updateHealthBar();
        }
    }

    //respawns and makes the slime stronger
    respawn() {
        this.totalHealth += this.healthIncreaseAmt;
        this.currentHealth = this.totalHealth;

        // makes sure if first time spawning slime sprite is normal
        //otherwise will switch once death timer is done
        if (this.isAlive) {
            var path = this.imgPath + "norm" + this.imgExtension;
            this.body.attr('src', path);
            this.updateHealthBar();
        }

        this.body.fadeIn();
        this.healthBar.fadeIn();

    }

    //respawns the slime without making it stronger
    normalRespawn() {
        this.currentHealth = this.totalHealth;

        //makes sure if first time spawning slime sprite is normal
        //otherwise will switch once death timer is done
        if (this.isAlive) {
            var path = this.imgPath + "norm" + this.imgExtension;
            this.body.attr('src', path);
            this.updateHealthBar();
        }

        this.body.fadeIn();
        this.healthBar.fadeIn();
    }

    // returns if the slime is alive or not
    isAlive() {
        return this.isAlive;
    }


}

export default Slime;