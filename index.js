var mins=0;
var secs=0;
var hrs=0;

var minsvalue=document.getElementById('mins');
var secsvalue=document.getElementById('secs');
var hrsvalue=document.getElementById('hrs');
var startbutton=document.getElementById('start-btn');
var stopbutton=document.getElementById('stop-btn');
var clearbutton=document.getElementById('clear-btn');

var setlimit;
var interval;

function limit() {
    setlimit=parseInt(document.getElementById("limit").value);
    alert("click on start button to start the timer!!");
}
    
function start() {
    if(interval){
        clearInterval(interval);
    }
    interval=setInterval(startTimer,1000);
}
    
function stop() {
    clearInterval(interval);
}
    
function clearFunction() {
    clearInterval(interval);
    hrs=0;
    mins=0;
    secs=0;
    hrsvalue.innerHTML="00";
    minsvalue.innerHTML="00";
    secsvalue.innerHTML="00";
}

function startTimer()
{
    secs++;
    
    if(secs === 60) {
        mins++;
        secs= 0;
    }
    
    if(mins === 60) {
        hrs++;
        mins=0;
        secs= 0;
    }
    
    secsvalue.innerHTML = String(secs).length === 1 ? `0${secs}` : `${secs}`;
    minsvalue.innerHTML = String(mins).length === 1 ? `0${mins}` : `${mins}`;
    hrsvalue.innerHTML = String(hrs).length === 1 ? `0${hrs}` : `${hrs}`;
    
    if(hrs*60+mins === setlimit) {
        stop()
    }
}

