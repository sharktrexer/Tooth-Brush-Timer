// Get local time
var curTime = new Date();

var timerRuntimeMin = 2;
var timerRuntimeSec = timerRuntimeMin * 60;
var secondsElapsed = timerRuntimeSec + 1;

var id = null;

function startTimer() {
    if(secondsElapsed <= 0) {
        clearInterval(id)
    }
    else {
        secondsElapsed--; 
    }
    return secondsElapsed
}

function formatTimer(time) {
    var mins = Math.round(time/60);
    var sec = time % 60;
    sec = sec < 10 ? "0" + sec : sec;
    return mins + ":" + sec;
    
}

id = setInterval(function() {
    $('#timer').text(
        formatTimer(startTimer()) + " Seconds");
}, 1000)

