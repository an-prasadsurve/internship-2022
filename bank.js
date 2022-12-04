const view =document.getElementById("view");
view.addEventListener("click",displayDetails);
 var row=1;
function displayDetails(){
    var cname=document.getElementById('name').value;
var amt=document.getElementById('amount').value;

var sacc=document.getElementById('type1').value;
var cacc=document.getElementById('type2').value;
 var balance=document.getElementById("initbal").value;

   let uname= document.getElementById("result1").innerHTML="Name:" + cname;
   let uacc =document.getElementById("result2").innerHTML="Account Type:" + sacc;
  //let uamt=  document.getElementById("result3").innerHTML="Amount:" + amt;
    document.getElementById("result3").innerHTML="Initial Balance:" + "54,000";
    

}




var deposit=document.getElementById('deposit');
deposit.addEventListener("click", depositAmt);
function depositAmt(amt)
{
balance+=amt;
return balance;
}
var withdraw=document.getElementById('withdraw');
withdraw.addEventListener("click", withdrawAmt);
function withdrawAmt(amt)
{
balance-=amt;
return balance;


}


displayDetails();
withdrawAmt(amt);
depositAmt(amt);