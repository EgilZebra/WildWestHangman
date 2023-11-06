const wordList = ["dog", "bear", "horse"];
const attempts = 8; 
//declaring multiple variables in one line
let secretWord, selectedWord, remainingAttempts, wrongGuess

const wordDisplay = document.getElementById("guessWord");
//console.log(wordDisplay)


// randomize a word from secretWords-array
const randomizedWord = () => {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    return selectedWord;
    
};
console.log(randomizedWord()) 

//function for displaying empty letter "__", joinas på mellanrum -> till array

    const hideWord = () => {
    secretWord = Array(selectedWord.length).fill("_");
    guessWord.textContent = secretWord.join(" ");
    return secretWord;
}
console.log(hideWord());


const compareInput = () => {
    for ( let i = 0; i < selectedWord.length; i++) {
    if (selectedWord.includes(document.getElementsByClassName("guessbox__input")[0].value, i)) { 
        console.log(`Ja, det funkar!`)
    } else {
        console.log(`Det funkar inte`)
    }
}

}

/* 
secretWord = Array(selectedWord.length).fill("_");

    //
    guessWord.textContent = secretWord.join(" ");
 */

/* function impliedLength () {
     guessWord.textContent = secretWord.join(" ");

} */


//shows the number of underscores needed for secretWord


//Create function for comparing correct input with several if/else statements - to change the `_`
/* function userInput (){
    if (secretWord ==  )
} */

// 


//

/* 

console.log(selectedWord)
 */