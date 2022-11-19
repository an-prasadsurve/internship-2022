
function myFun()
{
    var a=document.form1.txtname.value;
    document.getElementById("studname").innerHTML=a;
    var b=document.form1.txtfname.value;
    document.getElementById("studfname").innerHTML=b;
    var c=document.form1.txtins.value;
    document.getElementById("studins").innerHTML=c;
    var d=document.form1.txtbatch.value;
    document.getElementById("studbatch").innerHTML=d;
    var e=document.form1.txtoffice.value;
    document.getElementById("studoffice").innerHTML=e;
    var f=document.form1.txtweb.value;
    document.getElementById("studweb").innerHTML=f;
    var g=document.form1.txtit.value;
    document.getElementById("studit").innerHTML=g;
    var h=document.form1.txtc.value;
    document.getElementById("studc").innerHTML=h;
    var txt1=eval(parseFloat(document.form1.txtoffice.value)+parseFloat(document.form1.txtweb.value)
    +parseFloat(document.form1.txtit.value)+parseFloat(document.form1.txtc.value));
    document.getElementById("studtotal").innerHTML=txt1;
    var txt2=eval(parseFloat(txt1*100)/400);
    document.getElementById("studper").innerHTML=txt2.toFixed(2)+"%";
    
    switch(true)
    {
    case(txt2>=80):
    document.getElementById("studgrade").innerHTML="A1";
    break;
    case(txt2>=70):
    document.getElementById("studgrade").innerHTML="A";
    break;
    case(txt2>=60):
    document.getElementById("studgrade").innerHTML="B";
    break;
    case(txt2>=50):
    document.getElementById("studgrade").innerHTML="C";
    break;
    case(txt2>=40):
    document.getElementById("studgrade").innerHTML="D";
    break;
    case(txt2<40):
    document.getElementById("studgrade").innerHTML="Fail";
    break;
    }
}
 