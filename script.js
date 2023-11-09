const wordList = ["dog", "bear", "horse", "elephant"];
let figureList = ["ground", "scaffold", "head", "body", "arms", "legs"];
let secretWord, selectedWord;
let figureCounter = 0;
let score = 0;
let count = 60;
let wordDisplay = document.getElementById('guess-container__correct');
let vol = document.getElementById("sound-bg")
let musicIsPlaying = false;


vol.volume = 0.1
const musicPlay = () => {
    if (!musicIsPlaying) {
        const bgSound = document.getElementById('intro');
        if (bgSound && bgSound.paused) {
            bgSound.play();
            musicIsPlaying = true;
            document.removeEventListener('click', musicPlay);
        }
    }
}

document.addEventListener('click', musicPlay);

// timer for the game 60 sec
const timer = setInterval(function() {
  const playerTime = document.getElementById("timer-container__counter");
  count--;
   playerTime.textContent = `Timer: ${count}`;  
  console.log(count);
  if (count === 0) {
    clearInterval(timer);
    alert(`Time is up, restart the game`)
  }
}, 1000);

// randomize a word from secretWords-array
const randomizedWord = () => {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    return selectedWord;
};
randomizedWord() 

// function for displaying empty letter "__", joinas på mellanrum -> till array
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

  // Loops and checks if the letter is already stored
  for (let i = 0; i < selectedWord.length; i++) {
    if (secretWord[i] == guessLetter) {
       guessInput.value = '';
        alert("You have already guessed that")
    } // checks if the the guessed letter is in the secret word
      else if (selectedWord[i] === guessLetter) {
      secretWord[i] = guessLetter;
      guessInput.value = '';
      const successSound = document.getElementById("sound-correct");
      score++
      successSound.play()
    }
  }
  // Displaying the score
     const gainedScore = () => {
     const playerScore = document.getElementById("score-container__counter");
     playerScore.textContent = `Score: ${score}`;  
}
gainedScore()

   
 wordDisplay.textContent = secretWord.join(' ');
// Removes the faded filter on classes when the guess is correct.
  if (selectedWord.includes(guessLetter) == false) {
    document.getElementById(figureList[figureCounter]).classList.remove('faded');
    document.getElementsByClassName('guess-container__incorrect')[0].innerHTML += guessLetter;
    figureCounter++;
    guessInput.value = "";
    const soundIncorrect = document.getElementById("sound-incorrect");
    soundIncorrect.play();
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
 
// Bg-sound function and eventlistner to make autoplay word
