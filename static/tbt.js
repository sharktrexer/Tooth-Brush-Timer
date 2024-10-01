// Time vars
var timerRuntimeMin = 2;
var timerRuntimeSec = timerRuntimeMin * 60;
var secondsElapsed = 20;
var quarterTime = secondsElapsed / 4;

var pause = false;

var bellSound = new Audio('static/bell.wav');
bellSound.onended = function() {
    pause = false;
}

// Id to clear interval function
var id = null;

// Counts down, stopping interval once finished
function timer() {
    if(pause) {
        return secondsElapsed;
    }
    if(secondsElapsed <= 0) {
        clearInterval(id)
    }
    else {
        secondsElapsed--; 
    }
    if(secondsElapsed % quarterTime == 0) {
        quarterOfTimeEvent();
    }
    return secondsElapsed
}

// formats to "0:00"
function formatTimer(time) {
    var mins = Math.floor(time/60);
    var sec = time % 60;
    sec = sec < 10 ? "0" + sec : sec;
    $('#timer').text(mins + ":" + sec);
    
}

// Update timer every second
function startTimer() {
    id = setInterval(function() {
            formatTimer(timer());
    }, 1000)
}

function resetTimer() {
    secondsElapsed = timerRuntimeSec;
    formatTimer(secondsElapsed);
    if(id)
        clearInterval(id)
}

function quarterOfTimeEvent() {
    pause = true;
    bellSound.play();
}