
var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;

// HTML Structure
// <div id="countdown"></div>

// JavaScript Code
function timer() {
    var end = new Date(2024, 11, 31, 9, 59, 59); // December 31, 2024 23:59:59
    var t = end - new Date();

    var d = Math.floor(t / 1000 / 60 / 60 / 24);
    var h = Math.floor(t / 1000 / 60 / 60 % 24);
    if (h < 10) {
        h = "0" + h;
    }

    var m = Math.floor(t / 1000 / 60 % 60);
    if (m < 10) {
        m = "0" + m;
    }

    var s = Math.floor(t / 1000 % 60);
    if (s < 10) {
        s = "0" + s;
    }

    document.getElementById("d").innerHTML = d;
    document.getElementById("h").innerHTML = h;
    document.getElementById("m").innerHTML = m;
    document.getElementById("s").innerHTML = s;
}

function countdownToNewYear() {
    const countdownElement = document.getElementById("countdown");
    const targetDate = new Date("December 31, 2024 23:59:59").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            countdownElement.innerHTML = "🎉 Happy New Year 2025! 🎉";
            clearInterval(timer);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s left until New Year 2025!`;
    }

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to avoid 1-second delay
}

// Initialize the countdown on page load
window.onload = countdownToNewYear;


function fadein(){
	if(val < 1){
		val += 0.025;
		dv.style.opacity = val;
	}
	else{
		clearInterval(fadeinInterval);
		if(ok == 2){
			ok += 1;
		}
	}
}

var fadeInterval;
var fadeinInterval;

timer();
setInterval(timer, 1000);
fadeInterval = setInterval(function(){
	if(ok == 2){
		clearInterval(fadeInterval);
		fadeinInterval = setInterval(fadein, 50);
	}
}, 50)
