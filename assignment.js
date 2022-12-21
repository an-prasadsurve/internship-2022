var add=document.getElementById("add");
add.addEventListener("click",displayDetails);

var row=1;

function displayDetails(){
    var type = document.getElementById("type").value;
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;

    if(!type || !name || !date || !amount){
        alert("Please Enter all details");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = type;
    cell2.innerHTML = name;
    cell3.innerHTML = date;
    cell4.innerHTML = amount;

    row++;
}
