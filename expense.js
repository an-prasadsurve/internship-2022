function Add()
{   
    var types=document.getElementById("types").value;
    var name=document.getElementById("name").value;
    var date=document.getElementById("date").value;
    var amt=document.getElementById("amt").value;
   
    var tr=document.createElement('tr');
    
    var td1=tr.appendChild(document.createElement('td'));
    var td2=tr.appendChild(document.createElement('td'));
    var td3=tr.appendChild(document.createElement('td'));
    var td4=tr.appendChild(document.createElement('td'));
    

   
    td1.innerHTML=types;
    td2.innerHTML=name;
    td3.innerHTML=date;
    td4.innerHTML=amt;
    document.getElementById("tb2").appendChild(tr);

}
