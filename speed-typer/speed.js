// ^ ********** Get My Elements ************ //
const userInput = document.getElementById('user-input');
const timeElem = document.getElementById('time-left');
const scoreElem = document.getElementById('score');
const outputElem = document.getElementById('output');
const dropdownBtn = document.querySelector('.dropdown button');
const difficulty = document.querySelectorAll('li');
const input = document.querySelector('input');
const playBtn = document.getElementById('play');
const messageBoard = document.querySelector('.message-board');
const textCenter = document.querySelector('.text-center');
const scoreBoard = document.querySelector('.score-board');

// @ ********** Variables ************************//
let lastIndex;
let gameStart;
let countDown;
let words;
let timer = 15;
let score = 0;
let startTimer = 6;

// # ***********  Event Listeners ******************//
input.disabled = true;
dropdownBtn.addEventListener('click', handleClick);
playBtn.addEventListener('click', runClock);
window.addEventListener('DOMContentLoaded', () => {
    fetch('words.json')
        .then(res => res.json())
        .then(data => saveData(data)
        );
});

// $ ************** Functions ************************//
function starterGun() {
    if (startTimer) {
        dropdownBtn.style.pointerEvents = 'none';
        --startTimer;
        messageBoard.textContent = `Game Starts in: ${startTimer}s`;
        setTimeout(() => {
            input.disabled = false;
            messageBoard.textContent = '';
            input.focus();
        }, 4950);
        playBtn.classList.add('visually-hidden');
    };
};

function remainingTime() {
    if (timer && timer > 0) {
        --timer
        timeElem.textContent = `${timer}s`
    } else if (timer === 0) {
        messageBoard.textContent = "Play Again or Pick Level"
        outputElem.textContent = `You scored${score}pts`
        playBtn.textContent = 'Play Again'
        playBtn.classList.remove('visually-hidden')
        clearInterval(countDown);
        countDown = null;
        dropdownBtn.style.pointerEvents = 'auto'
        input.disabled = true
    }
}

function saveData(data) {
    words = data
}

function handleClick() {
    if (playBtn.textContent === 'Play Again') {
        playBtn.textContent = 'Play';
        messageBoard.textContent = 'Pick Level';
        timer = 15;
        startTimer = 6;
        score = 0;
        scoreElem.textContent = `${score}pts`;
    }

    difficulty.forEach((level, index) => {
        textCenter.classList.remove('visually-hidden')
        playBtn.classList.remove('visually-hidden');
        level.addEventListener('click', (e) => {
            messageBoard.textContent = ''
            console.log(index);
            lastIndex = index
            let level = e.target.textContent
            if (level) {
                dropdownBtn.textContent = level;
                populateGame(index)
                userInput.addEventListener('submit', (e) => {
                    playerInput(e, index)
                })
            }
            return lastIndex
        })
    })
}

function runClock() {
    if (playBtn.textContent === 'Play Again') {
        score = 0
        scoreElem.textContent = `${score}pts`;
        timer = 15;
        startTimer = 6;
        messageBoard.textContent = '';
        populateGame(lastIndex);
        gameStart = setInterval(starterGun, 1000);
        setTimeout(() => {
            clearInterval(gameStart);
            gameStart = null;
            countDown = setInterval(remainingTime, 1000)
        }, 5000)
        input.focus();
    } else {
        gameStart = setInterval(starterGun, 1000)
        setTimeout(() => {
            clearInterval(gameStart);
            countDown = setInterval(remainingTime, 1000)
        }, 5000)
        input.focus();
    }
}

function populateGame(index) {
    const choices = [];
    ({ twoLetterWords: choices[0], threeLetterWords: choices[1], fourLetterWords: choices[2], fiveLetterWords: choices[3], sixLetterWords: choices[4] } = words);
    let randomChoice = Math.floor(Math.random() * choices[index].length);
    outputElem.textContent = choices[index][randomChoice].toLowerCase();
    choices[index].splice(randomChoice, 1);
}

function playerInput(e, index) {
    e.preventDefault();
    if (input.value) {
        let player = userInput.firstElementChild.firstElementChild.value;
        let computer = outputElem.textContent;
        if (player === computer) {
            console.log(player, computer);
            input.value = '';
            timer += 1;
            score += 1;
            scoreElem.textContent = `${score}pts`;
            timeElem.textContent = `${timer}s`;
            populateGame(index);
            return score
        }
        populateGame(index);
        input.value = '';
    }
}