// Script code for Hang the cowboy!

const wordList = ["coyote", "bear", "horse", "eagle", "navajo", "saddle", "bison", "revolver", "rodeo", "bronco ", "ranch", "desperado "];
let figureList = ["ground", "scaffold", "head", "body", "arms", "legs"];
let secretWord, selectedWord, setTimer
let figureCounter = 0;
let score = 0;
let count = 60;
let tossContainer = document.getElementById("toss-container");
let showMessage = document.getElementById("show-message");
let wordDisplay = document.getElementById('guess-container__correct');
let vol = document.getElementById("sound-bg")
let musicIsPlaying = false;

// Background audio
vol.volume = 0.1; 
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

  // Gives a endgame popup, loose or win.
  // Runs showToss() if condition is met
    const gameEnd = () => {
      if (figureCounter == 6) {
        showToss(`You lost! The right word was "${selectedWord}" Do you want to try again?`)

        } else if (secretWord.join('').toString() == selectedWord) {
            showToss(`The correct word was: "${secretWord.join('').toString()}" <br/><br/> You won!`);
        }
    }

    // popup for ending the game.
    const showToss = (message) => { 
        showMessage.innerHTML = message;
        tossContainer.style.display = "flex";
    }

// Timer for the game.
const timer = () => {
clearInterval(setTimer)
 setTimer = setInterval(function() {
 const playerTime = document.getElementById("timer-container__counter");
  count--;
   playerTime.textContent = `Timer: ${count}`;  
  console.log(count);
  if (count == 0) {
    clearInterval(setTimer);
    showToss(`Time is up partner! <br> Try again!`)
  }
}, 1000);
}
timer()

// randomize a word from secretWords-array
const randomizedWord = () => {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    return selectedWord;
};
randomizedWord() 

// function for displaying empty letter "__", joins on blankspace -> to array
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
    guessInput.value = "";
    return null;
  } 

  // Loops and checks if the letter is already stored
  for (let i = 0; i < selectedWord.length; i++) {
    if (secretWord[i] == guessLetter) {
       guessInput.value = '';
        
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
  if (document.getElementsByClassName('guess-container__incorrect')[0].innerHTML.includes(guessLetter) == true) {
    guessInput.value = "";
  }
// Removes the faded filter on classes when the guess is correct.
  else if (selectedWord.includes(guessLetter) == false) {
    document.getElementById(figureList[figureCounter]).classList.remove('faded');
    document.getElementsByClassName('guess-container__incorrect')[0].innerHTML += guessLetter;
    figureCounter++;
    guessInput.value = "";
    const soundIncorrect = document.getElementById("sound-incorrect");
    soundIncorrect.play();
  }

// Delay timer for the picture to display before the game ends.
     setTimeout(() => {
       gameEnd();
     }, 1250);
}
//Connects "Enter" to input-container__text and later runs comparison()
const handleEnter = (event) => {
  if (event.keyCode === 13) {
      compareByInput()
  }
}

// reset the game from the beginning 
const resetGame = () => { 
  count = 60;
  timer();
  score = 0;
  document.getElementById("score-container__counter").textContent = `Score: ${score}`; 


  document.getElementsByClassName("input-container__text")[0].value = "";
  compareByInput(); 
  randomizedWord(); 
  hideWord(); 
  figureCounter = 0;
  
    tossContainer.style.display = "none";
    
//for..of to loop through figureList-array
for (let figure of figureList) {
      document.getElementById(figure).classList.add("faded");
  }
  document.getElementsByClassName("guess-container__incorrect")[0].innerHTML = "";
}
