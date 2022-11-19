window.onload=function() {
    document.getElementById("submit").addEventListener("click", function(){
        var str = document.getElementById("string1").value;
    var result = str.split(" ").map(function(word, i) {
    return i % 2 == 0 ? word : word.split("").reverse().join(""); }).join(" ");
    document.getElementById("output").innerHTML=result;
    })
}