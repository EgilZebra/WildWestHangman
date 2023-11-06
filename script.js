let counter = 0;

let secretWords = [
    "camel",
    "bear",
    "horse"
];
let choosenWord = [0];
let wrongGuess = [0];

const letterGuess = () => {
    const i = Math.floor(Math.random() * secretWords.length);
    return secretWords[i];
}
while (counter < secretWords.length) {
    counter++
}

console.log(letterGuess())