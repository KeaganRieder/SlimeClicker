/*
--------------------------------------------------------------------------
    js file for defining the upgrade shop
--------------------------------------------------------------------------
*/
import shopButton from './ShopButton.js';
import { UpdateWalkSpeed, UpdateAttackDamage, UpdateSlimePerClick, UpdateSlimeGroupSize } from './main.js';
class UpgradeShop {
    constructor() {
        this.upgradeShop = $('#UpgradeShop').hide();
        this.slimeBallCounter = $('#Counters').find('h2');
        this.upgrades = [
            new shopButton("Attack Dmg", 10, 10, UpdateWalkSpeed),
            new shopButton("Walk Speed", 10, 10, UpdateAttackDamage),
            new shopButton("Slime Group Size", 10, 10, UpdateSlimePerClick),
            new shopButton("Slime Per Click", 10, 10, UpdateSlimeGroupSize),

        ];
    }

    //toggles the shop on/off
    toggleShop() {
        this.upgradeShop.toggle();
    }
}

export default UpgradeShop;