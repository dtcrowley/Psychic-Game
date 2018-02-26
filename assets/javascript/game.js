var psychicChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var psychicGuess = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];

var wins = 0;
var losses = 0;
var chances = 9;
var prevAttempts = [];

var numberGuessed = function(){
    document.getElementById("remaining").innerHTML = chances;
}

var letterGuessed = function(){
    prevAttempts.toString();
    document.getElementById("guessed").innerHTML = prevAttempts;
}

var nextPsychicGuess = function(){
    psychicGuess = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];

}

var newRound = function(){
    chances = 9;
    prevAttempts = [];
    numberGuessed();
    letterGuessed();
    nextPsychicGuess();
}

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    if (psychicChoices.indexOf(userGuess) >= 0) {
        chances --;
        prevAttempts.push(userGuess);
        numberGuessed();
        letterGuessed();
        
        if (chances > 0){
            if (userGuess === psychicGuess){
                wins ++;
                document.getElementById("wins").innerHTML = wins;
                newRound();
                alert("You guessed right! Hey, how'd you do that?")
            }
        }
        
        else {
            losses ++;
            document.getElementById("losses").innerHTML = losses;
            newRound();
            }
        }
    else {
        alert("Must choose a letter a through z!");
    }
}
// I want to have an alert telling the user they've lost, but when I attempt if losses ++ it happens every incorrect guess,
// or if I try chances = 0, it ignores it and starts the counter over. Any input would be appreciated.