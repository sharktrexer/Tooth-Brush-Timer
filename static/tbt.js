// Get local time (TODO: have it be resetable)
var curTime = new Date();

var timerRuntimeMin = 2;
var timerRuntimeSec = timerRuntimeMin * 60;
var secondsElapsed = timerRuntimeSec + 1;

var id = null;

// Counts down, stopping interval once finished
function timer() {
    if(secondsElapsed <= 0) {
        clearInterval(id)
    }
    else {
        secondsElapsed--; 
    }
    return secondsElapsed
}

// formates to "0:00"
function formatTimer(time) {
    var mins = Math.floor(time/60);
    var sec = time % 60;
    sec = sec < 10 ? "0" + sec : sec;
    return mins + ":" + sec;
    
}

// Update timer every second
id = setInterval(function() {
    $('#timer').text(
        formatTimer(timer()));
}, 1000)

