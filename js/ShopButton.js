/*
--------------------------------------------------------------------------
    js file for defining what a button in the upgrade shop is
--------------------------------------------------------------------------
*/
import { slimeBallCount, updateSlimeBallCount } from './main.js';

class shopButton {
    constructor(name, cost, maxLvl, statToUpgrade) {

        this.name = name;
        this.cost = cost;
        this.lvl = 0;
        this.maxLvl = maxLvl;
        this.amountPerLvl = 1;

        this.cantAffordTimer;

        this.statToUpgrade = statToUpgrade;

        this.button = document.createElement('button');

        this.buttonTitle = document.createElement('h3');
        this.buttonTitle.textContent = this.name;

        this.contentDiv = document.createElement('div');

        this.costText = document.createElement('h3');
        this.costText.textContent = "Cost: " + this.cost;

        this.slimeBallImg = document.createElement('img');
        this.slimeBallImg.src = "images/slimeBall.png";
        this.slimeBallImg.alt = 'slimeBall';

        this.contentDiv.appendChild(this.costText);
        this.contentDiv.appendChild(this.slimeBallImg);

        this.button.appendChild(this.buttonTitle);
        this.button.appendChild(this.contentDiv);

        $('#UpgradeShop').find('#UpgradeButtonContainer').append(this.button);

        this.button.addEventListener('click', () => { this.buyUpgrade(); });
    }

    //buys the upgrade
    buyUpgrade() {
        console.log("buying upgrade" + this.name);
        if (this.lvl >= this.maxLvl) {
            //do nothing sense level maxed
            return;

        }
        else if (slimeBallCount >= this.cost) {
            this.lvl++;
            var statUp = this.amountPerLvl * this.lvl;

            this.statToUpgrade(statUp);
            updateSlimeBallCount(-this.cost);

            this.cost *= this.lvl;

            this.costText.textContent = "Cost: " + this.cost;
            this.buttonTitle.textContent = this.name + " | Level: " + this.lvl;

            if (this.lvl >= this.maxLvl) {
                this.contentDiv.hide();
                this.buttonTitle.textContent = this.name + " | Max Level Reached";
            }
        }

        else {

            clearTimeout(this.cantAffordTimer);

            this.buttonTitle.textContent = "Not enough slime balls!!";
            this.cantAffordTimer = setTimeout(() => {
                this.buttonTitle.textContent = this.name + " | Max Level Reached";

            }, 1000);
        }
    }

    //used to get css variables
    getCSSVariableValue(variableName) {
        return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
    }
}

export default shopButton;