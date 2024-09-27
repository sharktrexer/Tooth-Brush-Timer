// Get local time
var curTime = new Date();
var mins = curTime.getMinutes();
var secs = curTime.getSeconds();

// provide leading zeros
mins = (mins < 0 ? "0" : "") + mins;
secs = (secs < 0 ? "0" : "") + secs;

var time = hrs + ":" + mins + ":" + secs;

function secondsElapsed() {
    return Math.round(
        (new Date() - curTime) / 1000, 0);
}

var id = setInterval(function() {
    $('#timer').text(
        secondsElapsed() + " Seconds");
}, 1000)