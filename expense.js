<script type="text/javascript"> 
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];

var n=1;
var x=0;

function AddRow(){
    var AddRow=document.getElementById('show');
    var NewRow =AddRow.insertRow(n);

    list1[x] = document.getElementById('type1').value;
    list2[x] = document.getElementById('name1').value;
    list3[x] = document.getElementById('t1').value;
    list4[x] = document.getElementById('t2').value;

    var cell1 = NewRow.insertCell(0);
    var cell2 = NewRow.insertCell(1);
    var cell3 = NewRow.insertCell(2);
    var cell4 = NewRow.insertCell(3);

    cell1.innerHTML = list1[x];
    cell2.innerHTML = list2[x];
    cell3.innerHTML = list3[x];
    cell4.innerHTML = list4[x];

    n++;
    x++;

    
    function calc() {
        var m1 =parseInt(document.getElementById(m1).value);
        var m2 =parseInt(document.getElementById(m2).value);
        var oper =document.getElementById('m1').value;

        if(oper === '+') {
            document.getElementById('result').value =m1+m2;
        }

    }
}
</script>