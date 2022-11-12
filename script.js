var Submit=document.getElementById("Submit");
Submit.addEventListener("click",displayDetails);
var row=1;
function displayDetails()
{
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var sal = document.getElementById("sal").value;
    var mob= document.getElementById("mob").value;
    var dept = document.getElementById("dept").value;
    if(!name || !age || !sal || !mob || !dept)
    {
        alert("please fill all the details");
        return;
    }
    var display=document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);

    cell1.innerHTML = name;
    cell2.innerHTML=age;
    cell3.innerHTML=sal;
    cell4.innerHTML=mob;
    cell5.innerHTML=dept;

    row++;

}