// Get local time
var curTime = new Date();
var hrs = curTime.getHours();
var mins = curTime.getMinutes();
var secs = curTime.getSeconds();

// provide leading zeros
mins = (mins < 0 ? "0" : "") + mins;
secs = (secs < 0 ? "0" : "") + secs;

var time = hrs + ":" + mins + ":" + secs;

$('#clock').text(time);

setInterval(function() {
    $('#timer').text(
        Math.round(
        (new Date() - curTime) / 1000, 0) + " Seconds");
}, 1000)