//Javascript portion of my type game
const legendsType = {};
let arrayOfIndividualCharacters = [];

legendsType.easyMode = ['yuck', 'zeal', 'zoic', 'abys', 'aced', 'aced', 'acro', 'ditt', 'door', 'flex', 'wave'];

//I will need a function for a random number generator to display the total amount of words in my game
legendsType.randomNumberGen = function () {

}

//I need a function to split each word of my array in to an array of chacters

legendsType.currentIndividualLetterSplitter = function (currentWord) {
    arrayOfIndividualCharacters = [...currentWord];
    $('.first-letter').html(`<h2 class="">${arrayOfIndividualCharacters[0]}</h2>`);
    $('.second-letter').html(`<h2 class="">${arrayOfIndividualCharacters[1]}</h2>`);
    $('.third-letter').html(`<h2 class="">${arrayOfIndividualCharacters[2]}</h2>`);
    $('.fourth-letter').html(`<h2 class="">${arrayOfIndividualCharacters[3]}</h2>`);
}


//I need a function for event handling my individual keys on the keyboard

legendsType.keyPressed = function () {
    // This event handels all the key presses
    $(window).keypress(function (event) {
        //Obtains which key was pressed in the keyboard
        let keyLetter = event.which;
        console.log(event.which);
        $('.user-typed-letter').html(`<h2 class="">${keyLetter}</h2>`);
    })
}


//The sequence of the game is as follows
//1. generate a random number 
//3. use a for loop to cycle through the words
//4. In the for loop mentioned in #3, cycle through the individual characters in the array
//5. Compare each letter in the array to keystrokes
//if all the letters of the word have been matched, generate another random number and 

$(function () {

    legendsType.currentIndividualLetterSplitter();
    legendsType.keyPressed();

});