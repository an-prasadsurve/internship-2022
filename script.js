
window.onload = document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();

    let rows = parseInt(document.getElementById("rows").value);
    let columns = parseInt(document.getElementById("columns").value);

    let tablearea = document.getElementById('tablearea');

    let table = document.createElement('table');
    table.style = "border: 2px solid black;border-collapse: collapse;";

    for (let i = 1; i <= rows; i++) {
        let tr = document.createElement('tr');

        for(let j = 1; j <= columns; j++) {
            let td = document.createElement('td');
            td.style= "border: 2px solid black; padding: 10px";
            td.innerText = i*j;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
    tablearea.innerHTML = "";
    tablearea.appendChild(table);
});
