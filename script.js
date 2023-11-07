const wordList = ["dog", "bear", "horse", "elephant"];
let figureList = ["ground", "scaffold", "head", "body", "arms", "legs"];
let figureCounter = 0;
let secretWord, selectedWord
let wordDisplay = document.getElementById('guess-container__correct');
let reset = (figureCounter = 0);

// randomize a word from secretWords-array
const randomizedWord = () => {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    return selectedWord;
};
randomizedWord() 

//function for displaying empty letter "__", joinas på mellanrum -> till array
    const hideWord = () => {
    secretWord = Array(selectedWord.length).fill("_");
    wordDisplay.textContent = secretWord.join(" ");
    return secretWord;
}
hideWord();

// checks if the entered value is valid.
const compareByInput = () => {
  let guessInput = document.getElementsByClassName('input-container__text')[0];
  let guessLetter = guessInput.value;
  if (!guessLetter.match(/[a-z]/)) {
    alert('Only letters (a-z) is allowed');
    return null;
  }

  // checks if the the guessed letter is in the secret word
  for (let i = 0; i < selectedWord.length; i++) {
    if (selectedWord[i] === guessLetter) {
      secretWord[i] = guessLetter;
      guessInput.value = '';
    }
  }

  // Removes the faded filter on classes when the guess is correct.
  wordDisplay.textContent = secretWord.join(' ');
  if (selectedWord.includes(guessLetter) == false) {
    document
      .getElementById(figureList[figureCounter])
      .classList.remove('faded');
    document.getElementsByClassName(
      'guess-container__incorrect'
    )[0].innerHTML += guessLetter;
    figureCounter++;
    guessInput.value = "";
  }

  // Gives a endgame popup, loose or win.
    const gameEnd = () => {
      if (figureCounter == 6) {
        alert(`You lost! The right word was ${selectedWord} Do you want to try again?`);
        } else if (secretWord.join('').toString() == selectedWord) {
            alert(`The correct word was: ${secretWord.join('').toString()} You won!`);
        }
    }
    // Delay timer for the picture to display before the game ends.
     setTimeout(() => {
       gameEnd();
     }, 1250);
}
        
