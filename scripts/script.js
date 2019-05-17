//Javascript portion of my type game
const legendsType = {};
// legendsType.arrayOfIndividualCharacters = {};
let wordGen;
let globalTimer;

legendsType.easyMode = ['yuck', 'zeal', 'zoic', 'abys', 'aced', 'aced', 'acro', 'ditt', 'door', 'flex', 'wave'];
legendsType.letterCounter = 0;
legendsType.wordCounter = 0;
legendsType.currentWord = [];

//I will need a function for a random number generator to display the total amount of words in my game
legendsType.randomNumberGen = function () {
    return Math.floor(Math.random() * 11);
}

legendsType.start = function () {
    $('.start-game').on('click', function (event) {
        // console.log($.now());
        // e.preventDefault();
        wordGen = legendsType.randomNumberGen();
        // console.log(wordGen)
        legendsType.currentIndividualLetterSplitter(legendsType.easyMode[wordGen]);
        // return
    })
}

legendsType.midGame = function () {

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
    console.log(legendsType.currentWord);
    return arrayOfIndividualCharacters;
}


//I need a function for event handling my individual keys on the keyboard

legendsType.keyPressed = function () {
    let currentLetter;
    let currentNumber = [];
    // This event handels all the key presses
    $(window).keypress(function (event) {
        
        currentNumber = event.which;
        // console.log(currentNumber[0]);
        currentLetter = String.fromCharCode(event.which);
        console.log(currentLetter);
        $('.user-typed-letter').html(`<h2 class="">${currentLetter}</h2>`);
        console.log(legendsType.currentWord);
        
        if (currentLetter === legendsType.currentWord[legendsType.letterCounter]){
            console.log(`im working`);
            legendsType.letterCounter++;
            console.log(legendsType.letterCounter);
            if (legendsType.letterCounter === 4){
                legendsType.letterCounter =0
                wordGen = legendsType.randomNumberGen();
                legendsType.currentIndividualLetterSplitter(legendsType.easyMode[wordGen]);
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