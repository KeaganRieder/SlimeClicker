/*
--------------------------------------------------------------------------
    js file for defining the upgrade shop
--------------------------------------------------------------------------
*/
import shopButton from './ShopButton.js';
import { UpdateWalkSpeed, UpdateAttackDamage, UpdateSlimesPerGroup, UpdateSlimeGroupSize } from './main.js';
class UpgradeShop {
    constructor() {
        this.upgradeShop = $('#UpgradeShop').hide();
        this.slimeBallCounter = $('#Counters').find('h2');
        this.upgrades = [
            new shopButton("Attack Dmg", 20, 20, (amt) => {
                // console.log("Updating Attack Damage");
                UpdateAttackDamage(amt);
               
            }),
            new shopButton("Walk Speed", 50, 5, (amt) => {
                // console.log("Updating Walk Speed");
                UpdateWalkSpeed(amt);
            }),
            new shopButton("Slime Group Size", 40, 5, (amt) => {
                // console.log("Updating Slime Group Size");
                UpdateSlimesPerGroup(amt);
            }),
            new shopButton("Slimes per Group", 40, 5, (amt) => {
                // console.log("Updating Slimes per Group");
                UpdateSlimeGroupSize(amt);
            }),
        ];
    }

    //toggles the shop on/off
    toggleShop() {
        this.upgradeShop.toggle();
    }
}

export default UpgradeShop;