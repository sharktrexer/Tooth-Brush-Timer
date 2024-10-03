// Time vars
const timerRuntimeMin = 2;
const timerRuntimeSec = timerRuntimeMin * 60;
var countdown = timerRuntimeSec;
var quarterTime = Math.round(countdown / 4);
var pause = false;

// Id to clear interval function
var id = null;

// Selectors
const timerText = $('#timer');
const startBtn = $('#start');
const resetBtn = $('#reset');
const themeToggleBtn = $('#theme-toggle');

// Sounds
// TODO: make a sound play function. don't play tick if other sound is played.
const bellSound = new Audio('static/bell.wav');
const completedSound = new Audio('static/celebration.wav');
const tickSound = new Audio('static/soft_tick.wav');

// Assign events
bellSound.onended = function() {
    pause = false;
}
startBtn.click(function(){
    startTimer();
}); 
resetBtn.click(function(){
    resetTimer();
}); 
themeToggleBtn.click(function(){
    toggleTheme();
}); 

/*~~~~~~~~~~~~~~~~~~~~~~~~~Functions~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*Changes css theme from dark to light
    Uses local storage to remember theme on refresh */
function toggleTheme() {
    $("html").toggleClass("dark-mode");
    if ($("html").hasClass('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } 
    else {
        localStorage.removeItem('theme');
    }
}

// Counts down, stopping interval once finished
function timer() {
    if(countdown <= 0) {
        completedSound.play();
        clearInterval(id);
    }
    else if (!pause) {
        tickSound.play(); 
        countdown--; 
    }
    if(countdown % quarterTime == 0 && !(countdown <= 0)) {
        quarterOfTimeEvent();
    }
    formatTimer(countdown);
}

// formats to "0:00"
function formatTimer(time) {
    const mins = Math.floor(time/60);
    var sec = time % 60;
    sec = sec < 10 ? "0" + sec : sec;
    timerText.text(mins + ":" + sec);
}

// Update timer every second
function startTimer() {
    resetTimer();
    id = setInterval(function() {
            timer();
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