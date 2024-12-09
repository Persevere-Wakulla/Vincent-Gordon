// * Original Deck Were starting with 72 after we will move to six decks
const deckOfCards = [
	{
		suit: "hearts",
		value: 2,
		id: "./SVG-cards-1.3/2_of_hearts.svg",
		points: 2,
	},
	{
		suit: "hearts",
		value: 3,
		id: "./SVG-cards-1.3/3_of_hearts.svg",
		points: 3,
	},
	{
		suit: "hearts",
		value: 4,
		id: "./SVG-cards-1.3/4_of_hearts.svg",
		points: 4,
	},
	{
		suit: "hearts",
		value: 5,
		id: "./SVG-cards-1.3/5_of_hearts.svg",
		points: 5,
	},
	{
		suit: "hearts",
		value: 6,
		id: "./SVG-cards-1.3/6_of_hearts.svg",
		points: 6,
	},
	{
		suit: "hearts",
		value: 7,
		id: "./SVG-cards-1.3/7_of_hearts.svg",
		points: 7,
	},
	{
		suit: "hearts",
		value: 8,
		id: "./SVG-cards-1.3/8_of_hearts.svg",
		points: 8,
	},
	{
		suit: "hearts",
		value: 9,
		id: "./SVG-cards-1.3/9_of_hearts.svg",
		points: 9,
	},
	{
		suit: "hearts",
		value: 10,
		id: "./SVG-cards-1.3/10_of_hearts.svg",
		points: 10,
	},
	{
		suit: "hearts",
		value: "J",
		id: "./SVG-cards-1.3/jack_of_hearts.svg",
		points: 10,
	},
	{
		suit: "hearts",
		value: "Q",
		id: "./SVG-cards-1.3/queen_of_hearts.svg",
		points: 10,
	},
	{
		suit: "hearts",
		value: "K",
		id: "./SVG-cards-1.3/king_of_hearts.svg",
		points: 10,
	},
	{
		suit: "hearts",
		value: "Ace",
		id: "./SVG-cards-1.3/ace_of_hearts.svg",
		points: 11,
	},
	{
		suit: "diamonds",
		value: 2,
		id: "./SVG-cards-1.3/2_of_diamonds.svg",
		points: 2,
	},
	{
		suit: "diamonds",
		value: 3,
		id: "./SVG-cards-1.3/3_of_diamonds.svg",
		points: 3,
	},
	{
		suit: "diamonds",
		value: 4,
		id: "./SVG-cards-1.3/4_of_diamonds.svg",
		points: 4,
	},
	{
		suit: "diamonds",
		value: 5,
		id: "./SVG-cards-1.3/5_of_diamonds.svg",
		points: 5,
	},
	{
		suit: "diamonds",
		value: 6,
		id: "./SVG-cards-1.3/6_of_diamonds.svg",
		points: 6,
	},
	{
		suit: "diamonds",
		value: 7,
		id: "./SVG-cards-1.3/7_of_diamonds.svg",
		points: 7,
	},
	{
		suit: "diamonds",
		value: 8,
		id: "./SVG-cards-1.3/8_of_diamonds.svg",
		points: 8,
	},
	{
		suit: "diamonds",
		value: 9,
		id: "./SVG-cards-1.3/9_of_diamonds.svg",
		points: 9,
	},
	{
		suit: "diamonds",
		value: 10,
		id: "./SVG-cards-1.3/10_of_diamonds.svg",
		points: 10,
	},
	{
		suit: "diamonds",
		value: "J",
		id: "./SVG-cards-1.3/jack_of_diamonds.svg",
		points: 10,
	},
	{
		suit: "diamonds",
		value: "Q",
		id: "./SVG-cards-1.3/queen_of_diamonds.svg",
		points: 10,
	},
	{
		suit: "diamonds",
		value: "K",
		id: "./SVG-cards-1.3/king_of_diamonds.svg",
		points: 10,
	},
	{
		suit: "diamonds",
		value: "Ace",
		id: "./SVG-cards-1.3/ace_of_diamonds.svg",
		points: 11,
	},
	{
		suit: "clubs",
		value: 2,
		id: "./SVG-cards-1.3/2_of_clubs.svg",
		points: 2,
	},
	{
		suit: "clubs",
		value: 3,
		id: "./SVG-cards-1.3/3_of_clubs.svg",
		points: 3,
	},
	{
		suit: "clubs",
		value: 4,
		id: "./SVG-cards-1.3/4_of_clubs.svg",
		points: 4,
	},
	{
		suit: "clubs",
		value: 5,
		id: "./SVG-cards-1.3/5_of_clubs.svg",
		points: 5,
	},
	{
		suit: "clubs",
		value: 6,
		id: "./SVG-cards-1.3/6_of_clubs.svg",
		points: 6,
	},
	{
		suit: "clubs",
		value: 7,
		id: "./SVG-cards-1.3/7_of_clubs.svg",
		points: 7,
	},
	{
		suit: "clubs",
		value: 8,
		id: "./SVG-cards-1.3/8_of_clubs.svg",
		points: 8,
	},
	{
		suit: "clubs",
		value: 9,
		id: "./SVG-cards-1.3/9_of_clubs.svg",
		points: 9,
	},
	{
		suit: "clubs",
		value: 10,
		id: "./SVG-cards-1.3/10_of_clubs.svg",
		points: 10,
	},
	{
		suit: "clubs",
		value: "J",
		id: "./SVG-cards-1.3/jack_of_clubs.svg",
		points: 10,
	},
	{
		suit: "clubs",
		value: "Q",
		id: "./SVG-cards-1.3/queen_of_clubs.svg",
		points: 10,
	},
	{
		suit: "clubs",
		value: "K",
		id: "./SVG-cards-1.3/king_of_clubs.svg",
		points: 10,
	},
	{
		suit: "clubs",
		value: "Ace",
		id: "./SVG-cards-1.3/ace_of_clubs.svg",
		points: 11,
	},
	{
		suit: "spades",
		value: 2,
		id: "./SVG-cards-1.3/2_of_spades.svg",
		points: 2,
	},
	{
		suit: "spades",
		value: 3,
		id: "./SVG-cards-1.3/3_of_spades.svg",
		points: 3,
	},
	{
		suit: "spades",
		value: 4,
		id: "./SVG-cards-1.3/4_of_spades.svg",
		points: 4,
	},
	{
		suit: "spades",
		value: 5,
		id: "./SVG-cards-1.3/5_of_spades.svg",
		points: 5,
	},
	{
		suit: "spades",
		value: 6,
		id: "./SVG-cards-1.3/6_of_spades.svg",
		points: 6,
	},
	{
		suit: "spades",
		value: 7,
		id: "./SVG-cards-1.3/7_of_spades.svg",
		points: 7,
	},
	{
		suit: "spades",
		value: 8,
		id: "./SVG-cards-1.3/8_of_spades.svg",
		points: 8,
	},
	{
		suit: "spades",
		value: 9,
		id: "./SVG-cards-1.3/9_of_spades.svg",
		points: 9,
	},
	{
		suit: "spades",
		value: 10,
		id: "./SVG-cards-1.3/10_of_spades.svg",
		points: 10,
	},
	{
		suit: "spades",
		value: "J",
		id: "./SVG-cards-1.3/jack_of_spades.svg",
		points: 10,
	},
	{
		suit: "spades",
		value: "Q",
		id: "./SVG-cards-1.3/queen_of_spades.svg",
		points: 10,
	},
	{
		suit: "spades",
		value: "K",
		id: "./SVG-cards-1.3/king_of_spades.svg",
		points: 10,
	},
	{
		suit: "spades",
		value: "Ace",
		id: "./SVG-cards-1.3/ace_of_spades.svg",
		points: 11,
	},
];
// * Shuffled Deck
let shuffledDeck = [];

// ********** Players Hand ******************

let playersHand = [];
let split1stHand = [];
let split2ndHand = [];

// ************ Dealers Hand **************

let dealersHand = [];

// * Variables for everything we need to access

// ! ************* Game Variables *********
const welcome = document.getElementById("welcome");
const heroImage = document.getElementById("heroImage");
const sectionControl = document.querySelector(".section-control");
const toggleBtn = document.querySelector(".switch");
const toggleBtn2 = document.querySelector(".switch2");
const playBtn = document.querySelector(".glow");
const dealCards = document.querySelector(".test2");
const stayBtn = document.querySelector(".stay");
const hitBtn = document.querySelector(".hit");
// ! ************* Dealer Variables *********
const mainTableDealers1stCard = document.querySelector(".mainDealers1stCard");
const mainTableDealers2ndCard = document.getElementById("mainDealers2ndCard");
const mainTableDealers3rdCard = document.getElementById("mainDealers3rdCard");
const faceDownCard = document.querySelector(".face-down2");
const dealersFirstCard = document.getElementById("dealersFirstCard");
const dealersSecondCard = document.querySelector(".dealers-2nd-card");
const dealersThirdCard = document.querySelector(".dealers-3rd-card");
// ! ************* Player Variables *********
const firstCard = document.querySelector(".first-card");
const secondCard = document.querySelector(".second-card");
const thirdCard = document.querySelector(".third-card");
const fourthCard = document.querySelector(".fourth-card");
const fifthCard = document.querySelector(".fifth-card");
const splitFirstCard = document.querySelector(".split-first-card");
const splitSecondCard = document.querySelector(".split-second-card");
const splitThirdCard = document.querySelector(".split-third-card");
const splitFourthCard = document.querySelector(".split-fourth-card");

// ! ********* Score Keeping ************
const playersScore = document.getElementById("playerScore");
const playersPurse = document.getElementById("playersPurse");
const dealersScore = document.getElementById("dealersScore");
let playerScore = 0;
let dealerScore = 0;
let playerHandCount = 0;
let dealerHandCount = 0;
let split1stHandCount = 0;
let split2ndHandCount = 0;
let dealersTotalScore = 0;

// ! ******** Betting ************
const minusBet = document.querySelector(".minus");
const plusBet = document.querySelector(".plus");
const playersBet = document.querySelector(".player-bet");
const placeBet = document.querySelector(".bet");
let playerPurse = 10000;
playersPurse.textContent += playerPurse;
let currentBet = 0;

//  ! ******* Functions **********
let shuffleArray = (array) => {
	shuffledDeck = [];
	for (let i = array.length; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		shuffledDeck.push(array[j]);
	}

console.log(shuffledDeck);
	return shuffledDeck;
};
window.addEventListener("DOMContentLoaded", () => {
	// console.log(shuffledDeck);
	shuffleArray(deckOfCards);
	playersBet.textContent = `$${0}`;
});

// ? The first deal May need to be modified later ? ***************
const enterDealer = (arr) => {
	for (let i = 0; i < 1; i++) {
		// @Player 1st Card
		playerHandCount++;
		firstCard.style.border = '1px solid #02f802';
		firstCard.src = arr[i].id;
		let num = arr[i].points;
		playersHand.push(arr.shift());

		// % Dealers 1st Card
		dealerHandCount++;
		faceDownCard.classList.remove("hide-container");
		dealersFirstCard.style.border = '1px solid hsl(357, 96%, 51%)';
		dealersFirstCard.src = arr[i].id;
		dealersTotalScore += arr[i].points;
		mainTableDealers1stCard.src = dealersFirstCard.src;
		dealersHand.push(arr.shift());

		//  # Players 2nd Card
		playerHandCount++;
		secondCard.style.border = '1px solid #f066a6';
		secondCard.src = arr[i].id;
		let num1 = arr[i].points;
		playersHand.push(arr.shift());

		// ! Dealers 2nd Card
		dealerHandCount++;
		dealersSecondCard.style.border = '1px solid hsl(315, 84%, 39%)';
		dealersSecondCard.src = arr[i].id;
		dealersTotalScore += arr[i].points;
		let num2 = arr[i].points;
		dealersHand.push(arr.shift());
		// todo Logs to check all working and non-working statements
		console.log(playerHandCount);
		console.log(dealerHandCount);
		console.log(playersHand);
		console.log(dealersHand);
		console.log(dealersTotalScore);
		console.log(shuffledDeck);
		scoring(num, num1, num2);
	}
	blackJack(playerScore);
};
//  ? The score of actual hand
function scoring(num, num1, num2) {
	dealerScore = num2;
	playerScore = num + num1;
	playersScore.textContent = playerScore;
	console.log(num2, num, num1);
	dealersScore.textContent = dealerScore;
}

function betting(e) {
	playerPurse = 10000;
	let target = e.target;
	if (target.classList.contains("plus")) {
		currentBet += 10;
		playersBet.textContent = `$${currentBet}`;
		playersPurse.textContent = `$ ${playerPurse - currentBet}`;
	} else if (target.classList.contains("minus") && currentBet > 0) {
		currentBet -= 10;
		playersBet.textContent = `$${currentBet}`;
		playersPurse.textContent = `$ ${playerPurse - currentBet}`;
	} else if (target.textContent == "bet" && currentBet >= 50) {
		dealCards.classList.remove("hide-container");
		welcome.classList.add("hide-container");
	} else if (target.textContent == "bet" && currentBet < 50) {
		console.log(e.target.textContent);
		welcome.classList.remove("hide-container");
		welcome.textContent = "Bets Must Be Over $50, please Place correct Bet";
	}
}
// @ checks for aces
function aces(arr) {
	if (arr[0].value === "Ace") {
		return (playersScore.textContent = playerScore - 10);
	}
	return arr;
}
// @ SCORE
function busted(score) {
	if (score > 21) {
		welcome.classList.remove("hide-container");
		welcome.textContent = "You Busted";
		clearTable();
	}
}

function blackJack(score) {
	if (score === 21) {
		welcome.classList.remove("hide-container");
		welcome.textContent = "Black Jack Baby";
	}
}

function clearTable() {
	firstCard.src = "";
	secondCard.src = "";
	thirdCard.src = "";
	fourthCard.src = "";
	fifthCard.src = "";
	resumeBetting();
	playerHandCount = 0;
	dealerHandCount = 0;
	playerScore = 0;
	playersScore.textContent = playerScore;
}

function cancelBetting() {
	placeBet.disabled = true;
	plusBet.style.pointerEvents = "none";
	minusBet.style.pointerEvents = "none";
}

function resumeBetting() {
	placeBet.disabled = false;
	plusBet.style.pointerEvents = "all";
	minusBet.style.pointerEvents = "all";
}
const hit = (e, arr) => {
	console.log(e.target, shuffledDeck.length, playerScore);
	if (playerHandCount === 2 && playerScore < 21) {
		thirdCard.src = arr[0].id;
		aces(arr);
		playerScore += arr[0].points;
		busted(playerScore);
		playersScore.textContent = playerScore;
		playersHand.push(arr.shift);
		playerHandCount++;
	} else if (playerHandCount === 3 && playerScore < 21) {
		fourthCard.src = arr[0].id;
		aces(arr);
		playerScore += arr[0].points;
		busted(playerScore);
		playersScore.textContent = playerScore;
		playersHand.push(arr.shift);
	}
};
const stay = (arr) => {
	hitBtn.style.pointerEvents = "none";
	if (dealersTotalScore <= 16 && dealerHandCount === 2) {
		dealerHandCount++;
		dealersThirdCard.src = arr[0].id;
		dealersTotalScore += arr[0].points;
		dealersScore.textContent = dealerScore + arr[0].points;
	}
};

// ************ Event Listeners ************

dealCards.addEventListener("click", () => {
	enterDealer(shuffledDeck);
	cancelBetting();
	dealCards.classList.add("hide-container");
});

plusBet.addEventListener("click", betting);

minusBet.addEventListener("click", betting);

placeBet.addEventListener("click", betting);

stayBtn.addEventListener("click", () => {
	stay(shuffledDeck);
});

hitBtn.addEventListener("click", (e) => {
	hit(e, shuffledDeck);
});
// ************ Functions to hide and display *******

sectionControl.addEventListener("click", (e) => {
	let target = e.target;
	if (target.classList.contains("box")) {
		welcome.classList.add("hide-container");
	}
});
playBtn.addEventListener("click", (e) => {
	sectionControl.classList.toggle("show-container");
	heroImage.classList.toggle("hide-container");
	welcome.classList.remove("hide-container");
});
const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", (e) => {
	sectionControl.classList.remove("show-container");
	heroImage.classList.remove("hide-container");
});
// shuffle deck
shuffleArray(deckOfCards);

const dragMe = document.getElementById("deck");

dragMe.addEventListener("dragstart", (e) => {
	dragMe.style.opacity = 1;
});
dragMe.addEventListener("dragend", (e) => {
	dragMe.style.opacity = 1;
});
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
	box.addEventListener("dragenter", (e) => {
		e.target.classList.add("red");
	});
	box.addEventListener("dragover", (e) => {
		e.preventDefault();
		dragMe.style.opacity = 1;
	});
	box.addEventListener("dragleave", (e) => {
		console.log("leave");
		e.target.classList.remove("red");
	});
	box.addEventListener("drop", (e) => {
		e.preventDefault();
		console.log("dropped");
		e.target.appendChild(dragMe);
	});
});
dragStart = (e) => {
	console.log("started");
};
toggleBtn.addEventListener("click", (e) => {
	document.documentElement.classList.toggle("darkMode");
});
toggleBtn2.addEventListener("click", (e) => {
	document.documentElement.classList.toggle("darkMode");
});
noDuplicate = (arr1, arr2) => {
	let rando = Math.floor(Math.random() * arr1.length);
	console.log(rando);
	while (arr1.length >= arr2.length) {
		arr2.push(arr1[rando]);
		while (arr2.length < arr1.length) {
			for (let i = 0; i < arr2.length; i++) {
				if (arr2[i] === arr1[rando]) {
					continue;
				} else {
					arr2.push(arr1[rando]);
				}
			}
		}
	}
	return arr2;
};