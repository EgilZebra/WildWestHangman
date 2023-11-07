const wordList = ["dog", "bear", "horse", "elephant"];
let figureList = ["ground", "scaffold", "head", "body", "arms", "legs"];
const attempts = 6; 

//declaring multiple variables in one line
let secretWord, selectedWord, remainingAttempts, wrongGuess

let wordDisplay = document.getElementById("guessWord");
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


// 
let figureCounter = 0;
const compareByInput = () => {
    let guessInput = document.getElementsByClassName("guessbox__input")[0];

  
    let guessLetter = guessInput.value; 
    if (!guessLetter.match(/[a-z]/)) {
        alert("Only letters (a-z) is allowed");
        return null;
    }

    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === guessLetter) {
            secretWord[i] = guessLetter;
            console.log(`Jajjebulle`)
        }
    }
    
    guessWord.textContent = secretWord.join(" ");
    if (selectedWord.includes(guessLetter) == false) {
          
        document.getElementById(figureList[figureCounter]).classList.remove("faded"); 

        document.getElementsByClassName("wrongguess__text")[0].innerHTML += guessLetter;

        figureCounter++
    }  
   if (figureCounter == 6) {
            alert(`You lost! The right word was ${selectedWord} Do you want to try again?`)
            figureCounter = 0;
        } 
       
       setTimeout(() => {
            winner()
        }, 1250)
           /* console.log(secretWord.join("").toString(), selectedWord) */
        
    }
    

    function winner() {
        
        if (secretWord.join("").toString() == selectedWord) {
            alert(`The correct word was: ${secretWord.join("").toString()} You won!`)
           }
        }
        
