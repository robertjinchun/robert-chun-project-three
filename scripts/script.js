//Javascript portion of my type game
const legendsType = {};
// legendsType.arrayOfIndividualCharacters = {};
let wordGen;
let globalTimer;

legendsType.easyMode = ['yuck', 'zeal', 'zoic', 'abys', 'aced', 'aced', 'acro', 'ditt', 'door', 'flex', 'wave', 'alba', 'alto', 'quey', 'dorm', 'pipy', 'myna', 'sean', 'rear', 'mare', 'ruse', 'gari', 'klan', 'line', 'stew', 'rima', 'hern', 'soda', 'taal', 'liao', 'bull', 'plur', 'feta', 'eats', 'hide', 'scan', 'phon', 'fozy', 'mowe', 'damn', 'luba', 'kuyp', 'phot', 'eery', 'tees', 'areg', 'huly', 'bite', 'calf', 'deng', 'bene', 'chad', 'nork', 'dhal', 'lacy', 'wide', 'pogo', 'dill', 'king', 'tabi', 'ucla'];


legendsType.letterCounter = 0;
legendsType.wordCounter = 0;
legendsType.currentWord = [];
//legendsType.timer = 0;
legendsType.gameTime = 21;
legendsType.gameStart = false;
legendsType.totalPoints = 0;


//I will need a function for a random number generator to display the total amount of words in my game
legendsType.randomNumberGen = function () {
    return Math.floor(Math.random() * legendsType.easyMode.length);
}

legendsType.timeCalc = function () {
    let timeTemp;

    legendsType.gameTime--;
    $('.user-timer').html(`<h2 class="">${legendsType.gameTime}</h2>`);
    timeTemp = setTimeout(legendsType.timeCalc, 1000);
    //console.log(legendsType.gameStart);
    //console.log(legendsType.gameTime);
    if (legendsType.gameTime < 1) {
        clearTimeout(timeTemp);
        legendsType.gameTime = 21;
        legendsType.gameStart = false;
        console.log(legendsType.totalPoints);
        // legendsType.totalPoints = 0;
        $('.start-game').show();
        // $('.reset-game').show();
        //console.log()
    }
}

legendsType.start = function () {
    $('.start-game').on('click', function (event) {
        setTimeout(function () {
            $('.start-game').hide();
            // $('.reset-game').hide();
            legendsType.gameStart = true;
            legendsType.totalPoints = 0;
            $('.user-score').html(`<h2 class="">${legendsType.totalPoints}</h2>`);
            $('.first-letter').css('border-color', '#ba1f33');
            $('.second-letter').css('border-color', '#ba1f33');
            $('.third-letter').css('border-color', '#ba1f33');
            $('.fourth-letter').css('border-color', '#ba1f33');
            wordGen = legendsType.randomNumberGen();
            legendsType.currentIndividualLetterSplitter(legendsType.easyMode[wordGen]);
            legendsType.timeCalc();
        }, 500);
    })
}

legendsType.reset = function () {
    $('.reset-game').on('click', function (event) {
        $('.start-game').show();
        legendsType.gameStart = false;
        legendsType.totalPoints = 0;
        legendsType.gameTime = 21;
        $('.first-letter').css('border-color', '#ba1f33');
        $('.second-letter').css('border-color', '#ba1f33');
        $('.third-letter').css('border-color', '#ba1f33');
        $('.fourth-letter').css('border-color', '#ba1f33');
    })
}

//I need a function to split each word of my array in to an array of chacters

legendsType.currentIndividualLetterSplitter = function (currentWord) {
    let arrayOfIndividualCharacters = [];
    arrayOfIndividualCharacters = [...currentWord];
    //displays the split letters in the boxes
    $('.first-letter').html(`<h2 class="">${arrayOfIndividualCharacters[0]}</h2>`);
    $('.second-letter').html(`<h2 class="">${arrayOfIndividualCharacters[1]}</h2>`);
    $('.third-letter').html(`<h2 class="">${arrayOfIndividualCharacters[2]}</h2>`);
    $('.fourth-letter').html(`<h2 class="">${arrayOfIndividualCharacters[3]}</h2>`);
    legendsType.currentWord = arrayOfIndividualCharacters;
    //console.log(legendsType.currentWord);
    return arrayOfIndividualCharacters;
}


//I need a function for event handling my individual keys on the keyboard

legendsType.keyPressed = function () {
    let currentLetter;
    let currentNumber = [];
    // This event handels all the key pressesyuckasdkaskdyuck
    $(window).keypress(function (event) {

        currentNumber = event.which;
        // console.log(currentNumber[0]);
        currentLetter = String.fromCharCode(event.which);
        //console.log(currentLetter);

        //console.log(legendsType.currentWord);
        if (legendsType.gameStart === true) {
            $('.user-typed-letter').html(`<h2 class="">${currentLetter}</h2>`);
            if (currentLetter === legendsType.currentWord[legendsType.letterCounter]) {
                //console.log(`im working`);
                legendsType.letterCounter++;
                // $('.user-score').html(`<h2 class="">${legendsType.letterCounter}</h2>`);
                //console.log(legendsType.letterCounter);

                if (legendsType.letterCounter === 1) {
                    $('.first-letter').css('border-color', '#81f499');
                }
                if (legendsType.letterCounter === 2) {
                    $('.second-letter').css('border-color', '#81f499');
                }
                if (legendsType.letterCounter === 3) {
                    $('.third-letter').css('border-color', '#81f499');
                }
                if (legendsType.letterCounter === 4) {
                    legendsType.totalPoints++;
                    $('.user-score').html(`<h2 class="">${legendsType.totalPoints}</h2>`);
                    $('.first-letter').css('border-color', '#ba1f33');
                    $('.second-letter').css('border-color', '#ba1f33');
                    $('.third-letter').css('border-color', '#ba1f33');
                    $('.fourth-letter').css('border-color', '#ba1f33');
                    legendsType.letterCounter = 0;
                    wordGen = legendsType.randomNumberGen();
                    legendsType.currentIndividualLetterSplitter(legendsType.easyMode[wordGen]);
                }
            }
        }

    })
    // console.log($keyLetter);
    //return $keyLetter;
}


//The sequence of the game is as follows
//1. generate a random number 
//3. use a for loop to cycle through the words
//4. In the for loop mentioned in #3, cycle through the individual characters in the array
//5. Compare each letter in the array to keystrokes
//if all the letters of the word have been matched, generate another random number and 

$(function () {
    //init
    legendsType.start();
    // legendsType.currentIndividualLetterSplitter(legendsType.easyMode[wordGen]);
    legendsType.keyPressed();
    // console.log(console.log(legendsType.keyPressed ()));
    //console.log(legendsType.keyPressed ());
});