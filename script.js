function calculate()
{
  var a = parseInt(document.getElementById('bookOne').value);
  var b = parseInt(document.getElementById('bookTwo').value);
  var c = parseInt(document.getElementById('bookThree').value);
  var d = parseInt(document.getElementById('bookFour').value);
  
  var e= parseInt(document.getElementById('bookOne').value);
  document.getElementById("oa").innerHTML=e;

  var f= parseInt(document.getElementById('bookTwo').value);
  document.getElementById("wd").innerHTML=f;

  var g= parseInt(document.getElementById('bookThree').value);
  document.getElementById("it").innerHTML=g;

  var h= parseInt(document.getElementById('bookFour').value);
  document.getElementById("cp").innerHTML=h;


  var i = document.getElementById('n').value;
  document.getElementById("n1").innerHTML=i;

  var j = document.getElementById('fn').value;
  document.getElementById("fn1").innerHTML=j;

  var k = document.getElementById('in').value;
  document.getElementById("in1").innerHTML=k;

  var l = document.getElementById('b').value;
  document.getElementById("b1").innerHTML=l;






  



  if(a>100||b>100||c>100||d>100)
  {
    alert("please enter valid number");
  }
  else
  {
    var obtain=a+b+c+d;
    document.getElementById("obtain").innerHTML=obtain;
    var per=obtain/400*100;
    document.getElementById("percentage").innerHTML=per;

    if(per>=80){
      document.getElementById("grade").innerText="A"; 
    }
    if(per>=70){
      document.getElementById("grade").innerText="B"; 
    }
    else  if(per>=60){
      document.getElementById("grade").innerText="C"; 
    }
    else {
      document.getElementById("grade").innerText="F"; 
    }


  }
  return false;
}


function reset()
{

  document.getElementById('n').value = "";
  document.getElementById('fn').value = "";         
  document.getElementById('in').value = "";
  document.getElementById('b').value = ""; 
  document.getElementById('bookOne').value = "";
  document.getElementById('bookTwo').value = "";     
  document.getElementById('bookThree').value = "";
  document.getElementById('bookFour').value = ""; 


  document.getElementById('n1').innerText=""; 
  document.getElementById('fn1').innerText="";          
  document.getElementById('in1').innerText=""; 
  document.getElementById('b1').innerText=""; 

  document.getElementById('oa').innerText=""; 
  document.getElementById('wd').innerText=""; 
  document.getElementById('it').innerText="";          
  document.getElementById('cp').innerText=""; 
  document.getElementById('obtain').innerText=""; 

  document.getElementById('percentage').innerText=""; 
  document.getElementById('grade').innerText=""; 





}