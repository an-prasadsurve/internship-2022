function addFunction() {
  var table = document.getElementById('textbox');
  var rowlen = table.rows.length;
  var row = table.insertRow(rowlen);
  row.id = rowlen;
  var arr = ['textboxfiledname'];
  for (i = 1; i < 5; i++) {
    var x = row.insertCell(i);
    if (i == 1) {
      x.innerHTML =
        "<input type='button' onclick='removeCell(" +
        row.id +
        ")' value=Delete>";
    } else {
      x.innerHTML =
        '<label>' +
        arr[i] +
        ":</label><input type='textbox' name='" +
        arr[i] +
        "'>";
    }
  }
}

function removeCell(rowid) {
  var table = document.getElementById(rowid).remove();
}
function changeIt() {
  createTextbox.innerHTML =
    createTextbox.innerHTML + "<br><input type='text' name='mytext' >";
}
