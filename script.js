var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["age"] = document.getElementById("age").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["mobno"] = document.getElementById("mobno").value;
    formData["dept"] = document.getElementById("dept").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.age;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.mobno;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.dept;
    
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("mobno").value = "";
    document.getElementById("dept").value = "";
    selectedRow = null;
}


function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.age;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.mobno;
    selectedRow.cells[4].innerHTML = formData.dept;
}


function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}