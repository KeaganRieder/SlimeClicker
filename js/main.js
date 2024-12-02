/*
--------------------------------------------------------------------------
    Main js file for the game
--------------------------------------------------------------------------
*/
import Timer from './Timer.js';
import Slime from './Slime.js';
import SlimeClicker from './SlimeClicker.js';

/*
--------------------------------------------------------------------------
    Variables and classes
--------------------------------------------------------------------------
*/

const titleScreen = $('#TitleScreen');
const upgradeShop = $('#UpgradeShop').hide();
//create the slime
var slime = new Slime(100, $('#HPContainer'), $('#SlimeButton'));

// //create the timer
var gameTimer = new Timer(slime, $('#TimerContainer'), 10);

//create the clicker game
var slimeClicker = new SlimeClicker(slime, gameTimer);

/*
--------------------------------------------------------------------------
    event listeners and handlers
--------------------------------------------------------------------------
*/

$("#startButton").on('click', function () {
    console.log("start");
    titleScreen.fadeOut();
    slimeClicker.startGame();
});

$('#Slime').on('click', function () {
    console.log("slime clicked");

});

/*
--------------------------------------------------------------------------
    functions
--------------------------------------------------------------------------
*/
