var FULL_DASH_ARRAY = 283;
var TIME_SECENDS=190;
var WARNING_THRESHOLD = 10;
var ALERT_THRESHOLD = 5;
var COLOR_CODES = {
	info: {
		color: "green"
	},
	warning: {
		color: "orange",
		threshold: WARNING_THRESHOLD
	},
	alert: {
		color: "red",
		threshold: ALERT_THRESHOLD
	}
};
var TIME_LIMIT = TIME_SECENDS;
var timePassed = 0;
var timeLeft = TIME_LIMIT;
var timerInterval = null;
var remainingPathColor = COLOR_CODES.info.color;
$(".chat_footer_empty bcell_mid").html(` <div class="base-timer"> <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"> <g class="base-timer__circle"> <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle> <path id="base-timer-path-remaining" stroke-dasharray="283" class="base-timer__path-remaining ${remainingPathColor}" d=" M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0 " ></path> </g> </svg> <span id="base-timer-label" class="base-timer__label">${formatTime( timeLeft )}</span> </div> `);
startTimer();

function onTimesUp() {
	clearInterval(timerInterval);
}

function startTimer() {
	timerInterval = setInterval(() => {
		timePassed = timePassed += 1;
		timeLeft = TIME_LIMIT - timePassed;
		document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
		setCircleDasharray();
		setRemainingPathColor(timeLeft);
		if (timeLeft === 0) {
			onTimesUp();
		}
	}, 1000);
}

function formatTime(time) {
	var minutes = Math.floor(time / 60);
	var seconds = time % 60;
	if (seconds < 10) {
		seconds = `0${seconds}`;
	}
	return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
	var {
		alert,
		warning,
		info
	} = COLOR_CODES;
	if (timeLeft <= alert.threshold) {
		document.getElementById("base-timer-path-remaining").classList.remove(warning.color);
		document.getElementById("base-timer-path-remaining").classList.add(alert.color);
	} else if (timeLeft <= warning.threshold) {
		document.getElementById("base-timer-path-remaining").classList.remove(info.color);
		document.getElementById("base-timer-path-remaining").classList.add(warning.color);
	}
}

function calculateTimeFraction() {
	var rawTimeFraction = timeLeft / TIME_LIMIT;
	return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
	var circleDasharray = `${( calculateTimeFraction() * FULL_DASH_ARRAY ).toFixed(0)} 283`;
	document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray);
}
