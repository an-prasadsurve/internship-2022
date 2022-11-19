let itemsArr = [];

const addExpense = () => {

    let expenseType = document.getElementById("expense-type");
    expenseType  = expenseType.options[expenseType.selectedIndex].innerHTML;
    let expenseName = document.getElementById("expense-name").value;
    let expenseDate = document.getElementById("expense-date").value;
    let expenseAmount = document.getElementById("expense-amount").value;

    itemsArr.push({
        expenseType,
        expenseName,
        expenseDate,
        expenseAmount,
    });

    generateTable();
}

const generateTable = () => {
    let tbody = document.getElementById("table-content");
    tbody.innerHTML = "";
    let total = 0

    for(let i = 0; i < itemsArr.length; i++) {
        let tr = document.createElement("tr");
        let tdType = document.createElement("td");
        tdType.innerHTML = itemsArr[i].expenseType;
        let tdName = document.createElement("td");
        tdName.innerHTML = itemsArr[i].expenseName;
        let tdDate = document.createElement("td");
        tdDate.innerHTML = itemsArr[i].expenseDate;
        let tdAmount = document.createElement("td");
        tdAmount.innerHTML = itemsArr[i].expenseAmount;
        tr.appendChild(tdType);
        tr.appendChild(tdName);
        tr.appendChild(tdDate);
        tr.appendChild(tdAmount);
        tbody.appendChild(tr);

        total += parseInt(itemsArr[i].expenseAmount);
    }
    if(itemsArr.length > 0) {
        let tr = document.createElement("tr");
        let tdType = document.createElement("td");
        tdType.innerHTML = "";
        let tdName = document.createElement("td");
        tdName.innerHTML = "";
        let tdDate = document.createElement("td");
        tdDate.innerHTML = "Total :";
        let tdAmount = document.createElement("td");
        tdAmount.innerHTML = total;
        tr.appendChild(tdType);
        tr.appendChild(tdName);
        tr.appendChild(tdDate);
        tr.appendChild(tdAmount);
        tbody.appendChild(tr);
    }

}