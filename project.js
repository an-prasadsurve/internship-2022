function Display() {
  
    let flag1 = isEmptyField('name', 'name1');
    if (flag1 ) 
  {
  return true;
  }
  else {
  return false;
  }
  
  }
var rad = document.scales;
var prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        (prev) ? console.log(prev.value): null;
        if (this !== prev) {
            prev = this;
        }
        console.log(this.value)
    });
}