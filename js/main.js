/*
--------------------------------------------------------------------------
    Main js file for the game
--------------------------------------------------------------------------
*/
import Slime from './Slime.js';
import UpgradeShop from './UpgradeShop.js';
/*
--------------------------------------------------------------------------
    Variables and classes
--------------------------------------------------------------------------
*/

//clicker variables/stats
export var slimeBallCount = 0;
var attackDamage = 1; // controls how fast you kill a slime
// var slimePerClick = 1; // multiplier for how many slime balls you get per click

var walkSpeed = 10; // speed of cool down between slime group spawns

//slime variables
var slimes = [
    new Slime("Baby_Slime", 10, 10),
    new Slime("Blue_Slime", 20, 10),

]; // array of slimes
var currentSlime = 0; // index of the current slime
var slimeGroupSize = 0;
var slimeGroupOffsetSize = 0;
export var slimeGroupMaxSize = 5;

//upgrade shop variables
var upgradeShop = new UpgradeShop();

// html items
const titleScreen = $('#TitleScreen');
const gameScreen = $('#GameScreen').hide();
const upgradeShopButton = $('#ShopToggleButton');

const slimeBallCounter = $('#Counters').find('h2');
const timer = $('#TimerContainer').hide();

const slimeButton = $('#SlimeSection').find('#Slime').find('img');

/*
--------------------------------------------------------------------------
    event listeners and handlers
--------------------------------------------------------------------------
*/
$("#startButton").on('click', function () {
    titleScreen.fadeOut();

    startGame();
});

slimeButton.on('click', function () { attackSlime() });

upgradeShopButton.on('click', function () { upgradeShop.toggleShop() });


/*
--------------------------------------------------------------------------
    functions
--------------------------------------------------------------------------
*/

// used to start the game
function startGame() {
    gameScreen.fadeIn();
    slimeGroupSize = 3;

    //spawning slime
    slimes[currentSlime].normalRespawn();
}

// action for attacking the slime
function attackSlime() {

    if (slimes[currentSlime].isAlive) {
        slimes[currentSlime].takeDamage(attackDamage);
        updateSlimeBallCount(attackDamage);
    }

    //if none then have to walk to next encounter
    if (slimeGroupSize == 0 && !slimes[currentSlime].isAlive) {
        startTimer();
    }

    else if (slimeGroupSize > 0 && !slimes[currentSlime].isAlive) {
        slimeGroupSize--;
        currentSlime = getSlimeIndex();

        slimes[currentSlime].normalRespawn();
    }

}

//  starts the timer meant to act as a cool down between slime spawns
function startTimer() {
    timer.fadeIn();
    var timeLeft = walkSpeed;
    timer.find('h2').text("Walking: " + timeLeft);

    var timerInterval = setInterval(() => {
        timeLeft--;
        timer.find('h2').text("Walking: " + timeLeft);

        if (timeLeft == 0) {
            StartEncounter();
            timer.find('h2').text("More Slimes Appear!");

            clearInterval(timerInterval);
        }

    }, 1000);
}

//starts the next encounter after the timer is done
function StartEncounter() {
    slimeGroupSize = Math.floor(Math.random() * slimeGroupMaxSize) + slimeGroupOffsetSize;

    currentSlime = getSlimeIndex();
    if (!slimes[currentSlime].isAlive) {
        slimes[currentSlime].respawn();
    }
    else {
        slimes[currentSlime].normalRespawn();

    }

    timer.fadeOut();
}

function getSlimeIndex() {
    return Math.floor(Math.random() * slimes.length);
}

/*
--------------------------------------------------------------------------
   Utility functions
--------------------------------------------------------------------------
*/
export function updateSlimeBallCount(amt) {
    slimeBallCount += amt;
    slimeBallCounter.text(" : " + slimeBallCount);
}

export function UpdateWalkSpeed(amt) {
    walkSpeed += amt;
}

export function UpdateAttackDamage(amt) {
    console.log(amt);
    attackDamage += amt;
}

// export function UpdateSlimePerClick(amt) {
//     slimePerClick += amt;
// }

export function UpdateSlimeGroupSize(amt) {
    slimeGroupMaxSize += amt;
}

export function UpdateSlimesPerGroup(amt) {
    slimeGroupOffsetSize += amt;
}
