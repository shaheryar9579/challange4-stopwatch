document.getElementById('start').addEventListener('click', startWatch);
document.getElementById('stop').addEventListener('click', stopWatch);
document.getElementById('reset').addEventListener('click', resetWatch);

let minute = 0;
let hour = 0;
let sec = 0;
let msec = 0;
let interval;

function timer() {
    
    document.getElementById('miliSecond').innerHTML = ++msec;

    if(msec === 10) {
        document.getElementById('seconds').innerHTML = ++sec;
        msec = 0;
    }
    if(sec === 60) {
        minute++;
        document.getElementById('minutes').innerHTML = minute;
        sec = 0; 
    }
    if(minute === 60) {
        hour++;
        document.getElementById('hour').innerHTML = hour;
        minute = 0;
    }
}



function startWatch() {
    interval = setInterval(timer, 100);    
    document.getElementById('start').disabled = true;
}

function stopWatch() {
    clearInterval(interval);
}

function resetWatch() {

    minute = 0;
    hour = 0;
    sec = 0;
    msec = 0;
    document.getElementById('miliSecond').innerHTML = msec;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('minutes').innerHTML = minute;
    document.getElementById('hour').innerHTML = hour;
    clearInterval(interval); 
    document.getElementById('start').disabled = false;
}