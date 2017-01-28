var jumbotron1 = document.getElementById("jumbotron1");
var jumbotron2 = document.getElementById("jumbotron2");
var jumbotron3 = document.getElementById("jumbotron3");
var jumbotron4 = document.getElementById("jumbotron4");

var workGameButton = document.getElementById("workGame");
var workPomodoroButton = document.getElementById("workPomodoro");
var workQuoteButton = document.getElementById("workQuote");
var workSnakeButton = document.getElementById("workSnake");

var setIntervalId;
var index = 2;
var counter = 0;
var nextJumbotron;
var currentJumbotron = jumbotron1;

// JUMBOTRON --- JUMBOTRON --- JUMBOTRON --- JUMBOTRON --- JUMBOTRON --- JUMBOTRON 

function startAnimatingJumbotron() {
	setIntervalId = setInterval(animateJumbotron, 100);
}

function getJumbotron(index) {
	switch(index) {
		case 1: return jumbotron1;
		case 2: return jumbotron2;
		case 3: return jumbotron3;
		case 4: return jumbotron4;
	}
}

function animateJumbotron() {

	if (counter === 30) {
		nextJumbotron = getJumbotron(index);
		nextJumbotron.classList.add("fadeIn");
		//nextJumbotron.classList.add("animateJumbotron");

		index++;
		if (index == 5) index = 1;
	}

	else if (counter === 50) {
		nextJumbotron.classList.add("animateJumbotron");
		currentJumbotron.classList.remove("animateJumbotron");

		nextJumbotron.classList.remove("fadeIn");
		
		currentJumbotron = nextJumbotron;
	}

	counter++;
	if (counter === 51) counter = 0;
}

startAnimatingJumbotron();

// WORK --- WORK --- WORK --- WORK --- WORK --- WORK --- WORK --- WORK --- WORK  

function displayWorkGame() {
	
}



