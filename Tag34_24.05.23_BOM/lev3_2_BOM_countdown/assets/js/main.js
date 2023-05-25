/* Schreibe eine Funktion, die einen Countdown in Minuten anzeigt und sich pausieren und neu starten lässt.
Der HTML und CSS Code befindet sich im Kommentar.
Nutze unter anderem
setInterval()
clearInterval()
if
 */
/* 
let counter = document.querySelector("#time");
let inputTime = document.querySelector("#minutes").value;

console.log(inputTime);


  function formatTime(time) {
    inputTime = Math.floor(time / 60);
    let seconds = time % 60;
  
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
  
    return `${minutes}:${seconds}`;
    }
formatTime(inputTime);



function startMinCountdown(){

    
/* 
    const runterZaehlen = () => {
        
        counter.innerHTML = inputTime; 
        if (inputTime === 0){
            clearInterval(interval);
        }
        inputTime--; 
    };
    const interval = setInterval(runterZaehlen, 1000); 

    
 */





 
//! GLOBAL SCOPES
const timeOutput = document.querySelector("#time");
let intervalVar;

//! startMinCountdown Funktion
const startMinCountdown = () => {
	event.preventDefault();

	let minutes = Number(document.querySelector("#minutes").value);
	let seconds = 0;
	updateTimeOutput(minutes, seconds);

	intervalVar = setInterval(() => {
		if (minutes === 0 && seconds === 1) {
			clearInterval(intervalVar);
		}

		if (seconds === 0) {
			minutes--;
			seconds = 59;
		} else {
			seconds--;
		}

		updateTimeOutput(minutes, seconds);
	}, 1000);
};

const updateTimeOutput = (minutes, seconds) => {
	const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
	const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
	timeOutput.textContent = `${formattedMinutes}:${formattedSeconds}`;
};

//! pauseMinCountdown Funktion
const pauseMinCountdown = () => {
	clearInterval(intervalVar);
};

//! restartMinCountdown Funktion
const restartMinCountdown = () => {
	event.preventDefault();
	//hole mir den aktuellen wert aus dem Timeoutput ist ein String!
	const stoppedTime = timeOutput.textContent;

	//minuten ausschneiden und in eine Nummer zurueck verwandeln
	let minutes = Number(stoppedTime.slice(0, 2));

	//sekunden ausschneiden und in eine Nummer zurueck verwandeln
	let seconds = Number(stoppedTime.slice(3));

	//ab jetzt exakt selbe funktion wie bei startMinCountdown
	updateTimeOutput(minutes, seconds);

	intervalVar = setInterval(() => {
		if (minutes === 0 && seconds === 1) {
			clearInterval(intervalVar);
		}

		if (seconds === 0) {
			minutes--;
			seconds = 59;
		} else {
			seconds--;
		}

		updateTimeOutput(minutes, seconds);
	}, 1000);
};

//! reset Funktion
const reset = () => {
	clearInterval(intervalVar);
	timeOutput.textContent = "00:00";
	document.querySelector("#minutes").value = "";
};

// ==========================================================================

//getting output/inputs
const timeInput = document.querySelector("#minutes");
const outputCountdown = document.querySelector("#time");

//setting global vars
let timeDifference = 0;
let timerInterval = null;

const startMinCountdown = () => {
	//clear interval (better with chekc if it is there)
	clearInterval(timerInterval);
	let minutes = timeInput.value;
	const regex = /^[0-9]+$/;
	if (!minutes.match(regex)) {
		alert("Enter a Number in please");
		return;
	} else {
		//calc some date time magic
		const minutesInMillsec = minutes * 60 * 1000;
		const date = new Date().getTime();
		const countDown = new Date(date - minutesInMillsec).getTime();
		timeDifference = date - countDown;

		//starting timer
		timerInterval = setInterval(timer, 1000);
	}
};
const pauseMinCountdown = () => {
	//clear interval from timer
	clearInterval(timerInterval);
};
const restartMinCountdown = () => {
	//restart timer
	timerInterval = setInterval(timer, 1000);
};

const timer = () => {
	//get minutes and second from time
	let minutesLeft = Math.floor(
		(timeDifference % (1000 * 60 * 60)) / (1000 * 60)
	);
	let secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);
	timeDifference -= 1000;

	//display time
	outputCountdown.innerHTML = `${minutesLeft}:${secondsLeft}`;

	if (timeDifference <= 0) {
		clearInterval(timerInterval);
		console.log("check");
	}
};
