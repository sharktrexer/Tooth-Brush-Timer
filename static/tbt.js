// Time vars
var timerRuntimeMin = 2;
var timerRuntimeSec = timerRuntimeMin * 60;
var countdown = timerRuntimeSec;
var quarterTime = countdown / 4;

var pause = false;

var bellSound = new Audio('static/bell.wav');
bellSound.onended = function() {
    pause = false;
}

// Id to clear interval function
var id = null;

// Counts down, stopping interval once finished
function timer() {
    if(countdown <= 0) {
        clearInterval(id)
    }
    else if (!pause) {
        countdown--; 
    }
    if(countdown % quarterTime == 0) {
        quarterOfTimeEvent();
    }
    return countdown
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
    countdown = timerRuntimeSec;
    formatTimer(countdown);
    if(id)
        clearInterval(id)
}

function quarterOfTimeEvent() {
    pause = true;
    bellSound.play();
}