let wordInput = document.querySelector("#word-input")
// console.log(wordInput)
let currentWord = document.querySelector("#current-word")
// console.log(currentWord)
let scoreDisplay = document.querySelector("#score")
let timeDisplay = document.querySelector("#time")
// console.log(scoreDisplay,timeDisplay)
let messssge = document.querySelector("#message")
// console.log(messssge)
let time = 16
let score = 0



const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
    ];
    // console.log(words)
    window.addEventListener("DOMContentLoaded",init)
    
    function init() {
        showWord(words);
        wordInput.addEventListener('input',startMatch)
    // console.log("start the game")
    setInterval(countdown,1000)
    setInterval(checkStatus,50)
}
function showWord(words) {
    const randomIndex = Math.floor(Math.random()*words.length)
//  console.log(words[randomIndex])
currentWord.innerHTML = words[randomIndex]
}
function startMatch() {
// console.log("Start the Match")

if(matchWords()){
    console.log("hi")
    showWord(words)
    wordInput.value = ''
    messssge.innerHTML = "Correct!!"
    score++;
    time = 16
} else {
    messssge.innerHTML = 'InCorrect!!'
}
scoreDisplay.innerHTML = score
}
    function matchWords() {

        if(currentWord.innerHTML.trim() === wordInput.value.trim()) {
            return true;
        } else {
            return false;
        }
    }

    function countdown() {
        if(time>0)
        time--
        timeDisplay.innerHTML = time
        
    }

    function checkStatus(){
        if(time===0){
            messssge.innerHTML = "Game Over!!"
            score = 1
        }
    }