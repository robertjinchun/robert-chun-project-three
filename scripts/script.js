//Javascript portion of my type game
// GameApp object
const legendsType = {};

// Jquery inside a variable
const $startGame = $('.start-game');
const $firstLetter = $('.first-letter');
const $secondLetter = $('.second-letter');
const $thirdLetter = $('.third-letter');
const $fourthLetter = $('.fourth-letter');

// My list of words
legendsType.easyMode = ['yuck', 'zeal', 'zoic', 'abys', 'aced', 'aced', 'acro', 'ditt', 'door', 'flex', 'wave', 'alba', 'alto', 'quey', 'dorm', 'pipy', 'myna', 'sean', 'rear', 'mare', 'ruse', 'gari', 'klan', 'line', 'stew', 'rima', 'hern', 'soda', 'taal', 'liao', 'bull', 'plur', 'feta', 'eats', 'hide', 'scan', 'phon', 'fozy', 'mowe', 'damn', 'luba', 'kuyp', 'phot', 'eery', 'tees', 'areg', 'huly', 'bite', 'calf', 'deng', 'bene', 'chad', 'nork', 'dhal', 'lacy', 'wide', 'pogo', 'dill', 'king', 'tabi', 'ucla'];

// important variables in object
legendsType.letterCounter = 0;
legendsType.wordCounter = 0;
legendsType.currentWord = [];
legendsType.wordGen = 0;
legendsType.gameTime = 21;
legendsType.gameStart = false;
legendsType.totalPoints = 0;

//I will need a function for a random number generator to display the total amount of words in my game
legendsType.randomNumberGen = function () {
    return Math.floor(Math.random() * legendsType.easyMode.length);
}

// I need a function to manage time
legendsType.timeCalc = function () {
    let timeTemp;
    legendsType.gameTime--;
    $('.user-timer').html(`<h2 class="">${legendsType.gameTime}</h2>`);
    timeTemp = setTimeout(legendsType.timeCalc, 1000);
    if (legendsType.gameTime < 1) {
        clearTimeout(timeTemp);
        legendsType.gameTime = 21;
        legendsType.gameStart = false;
        $startGame.show();
    }
}

// I need a function to start my game
legendsType.start = function () {
    $startGame.on('click', function (event) {
        $startGame.hide();
        $firstLetter.html(`<h2 class=""></h2>`);
        $secondLetter.html(`<h2 class=""></h2>`);
        $thirdLetter.html(`<h2 class=""></h2>`);
        $fourthLetter.html(`<h2 class=""></h2>`);

        setTimeout(function () {
            legendsType.gameStart = true;
            legendsType.totalPoints = 0;
            $('.user-score').html(`<h2 class="">${legendsType.totalPoints}</h2>`);
            $firstLetter.css('border-color', '#ba1f33');
            $secondLetter.css('border-color', '#ba1f33');
            $thirdLetter.css('border-color', '#ba1f33');
            $fourthLetter.css('border-color', '#ba1f33');
            legendsType.wordGen = legendsType.randomNumberGen();
            legendsType.currentIndividualLetterSplitter(legendsType.easyMode[legendsType.wordGen]);
            legendsType.timeCalc();
        }, 500);
    })
}

//I need a function to split each word of my array in to an array of chacters
legendsType.currentIndividualLetterSplitter = function (currentWord) {
    let arrayOfIndividualCharacters = [];
    arrayOfIndividualCharacters = [...currentWord];
    //displays the split letters in the boxes
    $firstLetter.html(`<h2 class="">${arrayOfIndividualCharacters[0]}</h2>`);
    $secondLetter.html(`<h2 class="">${arrayOfIndividualCharacters[1]}</h2>`);
    $thirdLetter.html(`<h2 class="">${arrayOfIndividualCharacters[2]}</h2>`);
    $fourthLetter.html(`<h2 class="">${arrayOfIndividualCharacters[3]}</h2>`);
    legendsType.currentWord = arrayOfIndividualCharacters;
    return arrayOfIndividualCharacters;
}

//I need a function for event handling my individual keys on the keyboard
legendsType.keyPressed = function () {
    let currentLetter;
    let currentNumber = [];

    // This event handels all the key presses
    $(window).keypress(function (event) {
        currentNumber = event.which;
        currentLetter = String.fromCharCode(event.which);
        if (legendsType.gameStart === true) {
            $('.user-typed-letter').html(`<h2 class="">${currentLetter}</h2>`);
            if (currentLetter === legendsType.currentWord[legendsType.letterCounter]) {
                legendsType.letterCounter++;

                if (legendsType.letterCounter === 1) {
                    $firstLetter.css('border-color', '#5b8266');
                }
                if (legendsType.letterCounter === 2) {
                    $secondLetter.css('border-color', '#5b8266');
                }
                if (legendsType.letterCounter === 3) {
                    $thirdLetter.css('border-color', '#5b8266');
                }
                if (legendsType.letterCounter === 4) {
                    legendsType.totalPoints++;
                    $('.user-score').html(`<h2 class="">${legendsType.totalPoints}</h2>`);
                    $firstLetter.css('border-color', '#ba1f33');
                    $secondLetter.css('border-color', '#ba1f33');
                    $thirdLetter.css('border-color', '#ba1f33');
                    $fourthLetter.css('border-color', '#ba1f33');
                    legendsType.letterCounter = 0;
                    legendsType.wordGen = legendsType.randomNumberGen();
                    legendsType.currentIndividualLetterSplitter(legendsType.easyMode[legendsType.wordGen]);
                }
            }
        }

    })
}

//The sequence of the game is as follows
//1. Press start
//2. generate a random number 
//3. Starts a timer
//4. uses the randomly generated number to pick a word
//5. breaks each word in to indicidual characters in an array
//6. Compare each letter in the array to keystrokes
//7. if all the letters of the word have been matched, generate another random number, incriment the score untill time runs out

$(function () {
    //takes care of the starting features
    legendsType.start();
    // takes care of the keystrokes
    legendsType.keyPressed();
});