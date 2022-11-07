
function maturity()
{
var principal=document.getElementById('principal').value;
var rate=document.getElementById('rate').value;
var ci=document.getElementById('ci').value;
var time=document.getElementById('time').value;var irate=rate/ci;
var mv=document.getElementById('mv').value;
document.getElementById('mv').value=(document.getElementById('principal').value*Math.pow((1 + irate/100),(time/12*ci))).toFixed(2);
document.getElementById(principal).innerHTML=principal;
document.getElementById(rate).innerHTML=rate;
document.getElementById(time).innerHTML=time;
}
