
/*
var words = [
    "javascript",
    "wtorek",
    "lalka",
    "lego",
    "kwiat",
    "auto",
    "ziemniak",
    "basen",
    "onomatopeja"
];




var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;
var numberOfGuesses = 10;


while (remainingLetters > 0 && numberOfGuesses > 0) {
    alert(answerArray.join(" "));
    var guess = prompt("Guess a letter, or click Anuluj to stop playing.");
    if (guess === null ) {
        break;
    }else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    }else {
        numberOfGuesses--;
        guess = guess.toLowerCase();
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answerArray.join(" "));

if(numberOfGuesses > 0) {
    alert("Good job! The answer was " + word);
}else{
    alert("Too bad! The answer was " + word);
}

 */

// objects

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function pickWord(){
    var words = [
        "javascript",
        "monday",
        "lollipop",
        "animal",
        "flower",
        "vehicle",
        "happy",
        "apartment",
        "restaurant"
    ];

    return words[Math.floor(Math.random() * words.length)];
};

function setupAnswerArray(word) {
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}

function showPlayerProgress(answerArray){
    alert(answerArray.join(" "));
}

function getGuess(){
    return prompt("Guess a letter, or click Anuluj to stop playing.");
}

function updateGameState(guess, word, answerArray) {
    numberOfGuesses--;
    var goodGuess = 0;
    guess = guess.toLowerCase();
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess && answerArray[j] === "_") {
            answerArray[j] = guess;
            goodGuess++;
        }
    }
    return goodGuess;
}

function showAnswerAndCongratulatePlayer(answerArray){
    showPlayerProgress(answerArray);

    if(numberOfGuesses > 0) {
        alert("Good job! The answer was " + word);
    }else{
        alert("Too bad! The answer was " + word);
    }
}

function drawSegment(incorrectGuesses){
    ctx.lineWidth = 4;

    if (incorrectGuesses === 0){
        ctx.strokeRect(20,20,20,20);
    }else if (incorrectGuesses === 1){
        ctx.beginPath();
        ctx.moveTo(30,40);
        ctx.lineTo(30,80);
        ctx.stroke();
    }else if (incorrectGuesses === 2){
        ctx.beginPath();
        ctx.moveTo(30,80);
        ctx.lineTo(10,110);
        ctx.stroke();
    }else if (incorrectGuesses === 3){
        ctx.beginPath();
        ctx.moveTo(30,80);
        ctx.lineTo(50,110);
        ctx.stroke();
    }else if (incorrectGuesses === 4){
        ctx.beginPath();
        ctx.moveTo(30,60);
        ctx.lineTo(10,50);
        ctx.stroke();
    }else if (incorrectGuesses === 5){
        ctx.beginPath();
        ctx.moveTo(30,60);
        ctx.lineTo(50,50);
        ctx.stroke();
    }
};

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var numberOfGuesses = 10;
var incorrectGuesses = 0;

while(remainingLetters > 0 && numberOfGuesses > 0){
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null){
        alert("You've canceled the game :( ");
        break;
    }else if (guess.length !== 1){
        alert("Please enter a single letter.");
    }else{
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;

        if (correctGuesses === 0){
            drawSegment(incorrectGuesses);
            incorrectGuesses++;
        }
    }
}

showAnswerAndCongratulatePlayer(answerArray);