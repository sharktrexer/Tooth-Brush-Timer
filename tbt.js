// Get local time
var curTime = new Date();
var hrs = curTime.getHours();
var mins = curTime.getMinutes();
var secs = curTime.getSeconds();

// provide leading zeros
mins = (mins < 0 ? "0" : "") + mins;
secs = (secs < 0 ? "0" : "") + secs;

var time = hrs + ":" + mins + ":" + secs;

$('#timer').text(time);