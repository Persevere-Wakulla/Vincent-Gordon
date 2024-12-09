
// function doCalc(evt){
// fireEvent
// }

let shelf = [
    ['rock', './images/icon-rock.svg'],
    ['spock', './images/icon-spock.svg'],
    ['scissors', './images/icon-scissors.svg'],
    ['lizard', './images/icon-lizard.svg'],
    ['paper', './images/icon-paper.svg']
]

let gameLib = ['./images/icon-lizard.svg', './images/icon-paper.svg', './images/icon-rock.svg', './images/icon-scissors.svg', './images/icon-spock.svg']
// let gameLib = {'./images/icon-lizard.svg', './images/icon-paper.svg', './images/icon-rock.svg', './images/icon-scissors.svg', './images/icon-spock.svg'}
let gameLib2 = ['./images/icon-paper.svg', './images/icon-scissors.svg', './images/icon-rock.svg']
let choices = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
let choices2 = ['rock', 'paper', 'scissors'];
let compBorder = ['scissors-image', 'spock-image', 'rock-image', 'lizard-image', 'paper-image'];
let compBorder2 = ['scissors-image', 'paper-image ', 'rock-image'];
let playerChoice = null;
let playerChoice2 = null;
let playerPic = document.getElementById('userWin');
playerPic.removeAttribute('src');
let playerPic2 = document.getElementById('userWin2');
playerPic2.removeAttribute('src');

let compPic = document.getElementById('compWin');
compPic.removeAttribute('src');
let compPic2 = document.getElementById('compWin2');
compPic2.removeAttribute('src');


const sciElem = document.getElementById('scissors');
const sciElem2 = document.getElementById('scissors2');
const rckElem = document.getElementById('rock');
const rckElem2 = document.getElementById('rock2');
const pprElem = document.getElementById('paper');
const pprElem2 = document.getElementById('paper2');
const lzdElem = document.getElementById('lizard');
const spkElem = document.getElementById('spock');
let decsiElem = document.getElementById('change-text');
let decsiElem2 = document.getElementById('change-text2');

let score = 0;
let score2 = 0;
let scoreElem = document.getElementById('score');
let scoreElem2 = document.getElementById('score2');
scoreElem.textContent = score;
scoreElem2.textContent = score2;
// create event listeners for all choices
sciElem.addEventListener('click', handleScissors);
sciElem2.addEventListener('click', handleScissors2);
rckElem.addEventListener('click', handleRock);
rckElem2.addEventListener('click', handleRock2);
pprElem.addEventListener('click', handlePaper);
pprElem2.addEventListener('click', handlePaper2);
lzdElem.addEventListener('click', handleLizard);
spkElem.addEventListener('click', handleSpock);

let btn = document.getElementById('playmore');
btn.addEventListener("click", hideGame2)
let btn2 = document.getElementById('playmore2');
btn2.addEventListener("click", hideGame3)

function compChoice(arr) {
    return results = arr[Math.floor(Math.random() * 5)]
}
function compChoice2(arr2) {
    return results2 = arr2[Math.floor(Math.random() * 3)]
}

function compPicChoice(compChoice) {
    if (compChoice === 'scissors') {
        comp = gameLib[3];
    } else if (compChoice === 'paper') {
        comp = gameLib[1];
    } else if (compChoice === 'rock') {
        comp = gameLib[2];
    } else if (compChoice === 'lizard') {
        comp = gameLib[0];
    } else {
        comp = gameLib[4];
    }

    return comp
}
function compPicChoice2(compChoice2) {
    if (compChoice2 === 'scissors') {
        comp2 = gameLib2[1];
    } else if (compChoice2 === 'paper') {
        comp2 = gameLib2[0];
    } else {
        comp2 = gameLib2[2];
    }

    return compChoice2 = comp2
}

function compBorderChoice() {


    if (results === 'scissors') {
        borde = compBorder[0];
    } else if (results === 'paper') {
        borde = compBorder[4];
    } else if (results === 'rock') {
        borde = compBorder[2];
    } else if (results === 'lizard') {
        borde = compBorder[3];
    } else {
        borde = compBorder[1];
    }

    return results = borde

}

function compBorderChoice2() {


    if (results2 === 'scissors') {
        borde2 = compBorder2[0];
    } else if (results2 === 'paper') {
        borde2 = compBorder2[1];
    } else {
        borde2 = compBorder2[2];
    }

    return results2 = borde2

}


function showRules() {
    rules.style.display = "block";
}
function showRules2() {
    rules2.style.display = "block";
}

function hideMenu() {
    rules.style.display = "none";

}
function hideMenu2() {
    rules2.style.display = "none";

}
function handleScissors() {
    playerChoice = 'scissors';

    playerPic.setAttribute('src', gameLib[3]);
    playerPic.className = 'scissors-image';

    showGame2();
    let compDecision = compChoice(choices);
    let compPicDecision = compPicChoice(compDecision);
    compPic.setAttribute('src', compPicDecision);
    compPic.className = compBorderChoice(compPicChoice);
    determineWinner(playerChoice, compDecision);
}
function handleScissors2() {
    playerChoice2 = 'scissors';

    playerPic2.setAttribute('src', gameLib2[1]);
    playerPic2.className = 'scissors-image2';

    showGame3();
    let compDecision2 = compChoice2(choices2);
    let compPicDecision2 = compPicChoice2(compDecision2);
    compPic2.setAttribute('src', compPicDecision2);
    compPic2.className = compBorderChoice2(compPicChoice2);
    determineWinner2(playerChoice2, compDecision2);
}
function handleRock() {
    playerChoice = 'rock';
    playerPic.setAttribute('src', gameLib[2]);
    playerPic.className = 'rock-image';
    showGame2();
    let compDecision = compChoice(choices);
    let compPicDecision = compPicChoice(compDecision);
    compPic.setAttribute('src', compPicDecision);
    compPic.className = compBorderChoice(compPicChoice);
    determineWinner(playerChoice, compDecision);

}
function handleRock2() {
    playerChoice2 = 'rock';
    playerPic2.setAttribute('src', gameLib2[2]);
    playerPic2.className = 'rock-image2';
    showGame3();
    let compDecision2 = compChoice2(choices2);
    let compPicDecision2 = compPicChoice2(compDecision2);
    compPic2.setAttribute('src', compPicDecision2);
    compPic2.className = compBorderChoice2(compPicChoice2);
    determineWinner2(playerChoice2, compDecision2);

}
function handlePaper() {
    playerChoice = 'paper';
    playerPic.setAttribute('src', gameLib[1]);
    playerPic.className = 'paper-image';
    showGame2();
    let compDecision = compChoice(choices);
    let compPicDecision = compPicChoice(compDecision);
    compPic.setAttribute('src', compPicDecision);
    compPic.className = compBorderChoice(compPicChoice);
    determineWinner(playerChoice, compDecision);

}
function handlePaper2() {
    playerChoice2 = 'paper';
    playerPic2.setAttribute('src', gameLib2[0]);
    playerPic2.className = 'paper-image2';
    showGame3();
    let compDecision2 = compChoice2(choices2);
    let compPicDecision2 = compPicChoice2(compDecision2);
    compPic2.setAttribute('src', compPicDecision2);
    compPic2.className = compBorderChoice2(compPicChoice2);
    determineWinner2(playerChoice2, compDecision2);

}
function handleLizard() {
    playerChoice = 'lizard';
    playerPic.setAttribute('src', gameLib[0]);
    playerPic.className = 'lizard-image';
    showGame2();
    let compDecision = compChoice(choices);
    let compPicDecision = compPicChoice(compDecision);
    compPic.setAttribute('src', compPicDecision);
    compPic.className = compBorderChoice(compPicChoice);

    determineWinner(playerChoice, compDecision);


}
function handleSpock() {
    playerChoice = 'spock';
    playerPic.setAttribute('src', gameLib[4]);
    playerPic.className = 'spock-image';
    showGame2();
    let compDecision = compChoice(choices);
    let compPicDecision = compPicChoice(compDecision);
    compPic.setAttribute('src', compPicDecision);
    compPic.className = compBorderChoice(compPicChoice);
    determineWinner(playerChoice, compDecision);


}
function increaseScore() {
    score++
    scoreElem.textContent = score;
}
function decreaseScore() {
    score--
    scoreElem.textContent = score;
    if (score <= 0) {
        score = 0;
        scoreElem.textContent = score;
        return score
    }
}
function increaseScore2() {
    score2++
    scoreElem2.textContent = score2;
}
function decreaseScore2() {
    score2--
    scoreElem2.textContent = score2;
    if (score2 <= 0) {
        score2 = 0;
        scoreElem2.textContent = score2;
        return score2
    }
}

function showGame2() {
    win.style.visibility = "visible";
    section.style.visibility = "hidden";

}
function showGame3() {
    win2.style.visibility = "visible";
    section2.style.visibility = "hidden";

}

function determineWinner(playerChoice, compChoice) {
    // tie
    if (playerChoice === compChoice) {
        decsiElem.textContent = 'You tied'

    } else if (playerChoice === 'scissors' && compChoice === 'paper' || playerChoice === 'scissors' && compChoice === 'lizard') {
        increaseScore()
        decsiElem.textContent = 'You Won'
    } else if (playerChoice === 'paper' && compChoice === 'rock' || playerChoice === 'paper' && compChoice === 'spock') {
        increaseScore()
        decsiElem.textContent = 'You Won'
    } else if (playerChoice === 'rock' && compChoice === 'lizard' || playerChoice === 'rock' && compChoice === 'paper') {
        increaseScore()
        decsiElem.textContent = 'You Won'
    } else if (playerChoice === 'lizard' && compChoice === 'paper' || playerChoice === 'lizard' && compChoice === 'spock') {
        decsiElem.textContent = 'You Won'
        increaseScore()
    } else if (playerChoice === 'spock' && compChoice === 'scissors' || playerChoice === 'spock' && compChoice === 'rock') {
        increaseScore()
        decsiElem.textContent = 'You Won'
    } else {
        decsiElem.textContent = 'You Lost'
        decreaseScore()
    }


}
function determineWinner2(playerChoice2, compChoice2) {
    // tie
    if (playerChoice2 === compChoice2) {
        decsiElem2.textContent = 'You tied'

    } else if (playerChoice2 === 'scissors' && compChoice2 === 'paper') {
        increaseScore2()
        decsiElem2.textContent = 'You Won'
    } else if (playerChoice2 === 'paper' && compChoice2 === 'rock') {
        increaseScore2()
        decsiElem2.textContent = 'You Won'
    } else if (playerChoice2 === 'rock' && compChoice2 === 'paper') {
        increaseScore2()
        decsiElem2.textContent = 'You Won'
    } else {
        decsiElem2.textContent = 'You Lost'
        decreaseScore2()
    }


}







function hideGame2() {
    win.style.visibility = "hidden";
    section.style.visibility = "visible";
    compPic.removeAttribute('src')
}
function hideGame3() {
    win2.style.visibility = "hidden";
    section2.style.visibility = "visible";
    compPic.removeAttribute('src')
}
const originalGameElem = document.getElementById('original');
originalGameElem.addEventListener('click', showOriginal)
const bonusGameElem = document.getElementById('bonus');
bonusGameElem.addEventListener('click', showBonus)
const menuElem = document.getElementById('menu');
menuElem.addEventListener('click', goToMain)
const menuElem2 = document.getElementById('menu2');
menuElem2.addEventListener('click', goToMain2)



function showOriginal() {
    section3.style.visibility = 'hidden';
    main2.style.visibility = 'visible';
    main1.style.visibility = 'hidden'
   section2.style.visibility = 'visible'
}
function showBonus() {
    section3.style.visibility = 'hidden';
    main1.style.visibility = 'visible';
    main2.style.visibility = 'hidden'
   section.style.visibility = 'visible'
}
function goToMain() {
    section3.style.visibility = 'visible';
    main1.style.visibility = 'hidden';
    section.style.visibility = 'hidden';


}
function goToMain2() {
    section3.style.visibility = 'visible';
    main2.style.visibility = 'hidden';
    section2.style.visibility = 'hidden';
    win2.style.visibility = 'hidden';

}





