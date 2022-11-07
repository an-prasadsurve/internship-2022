function Convert() {
    var fromValue = document.getElementById('fw').value;
    var toValue = document.getElementById('tw').value;
    var conversion = document.getElementById('v').value;
    var result;
  
    if (fromValue == 'kg') {
      result = conversion / 0.45359237;
    } else if (fromValue == 'p') {
      result = conversion * 0.45359237;
    }
    document.getElementById('type').textContent = toValue;
    document.getElementById('Result').textContent = result;
  }