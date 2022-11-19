function convertValue() {
  let from = document.getElementById('from');
  let to = document.getElementById('to');

  let valueToConvert = parseInt(
    document.getElementById('value-to-convert').value
  );
  let kgVal = convertToKilogram(parseInt(from.value), valueToConvert);
  let ans = convertFromKilogram(parseInt(to.value), kgVal);

  document.getElementById('ans').innerHTML = `Converted Value (${
    to.options[to.selectedIndex].text
  }) : ${ans}`;
}

const convertToKilogram = (from, value) => {
  let kg;
  switch (from) {
    case 1:
      {
        kg = value;
      }
      break;
    case 2:
      {
        kg = value / 2.2046;
      }
      break;
    case 3:
      {
        kg = value / 1000;
      }
      break;
    case 4:
      {
        kg = value / 35.274;
      }
      break;
    case 5:
      {
        kg = value / 0.15747;
      }
      break;
  }
  return kg;
};

const convertFromKilogram = (to, value) => {
  let ans;
  switch (to) {
    case 1:
      {
        ans = value;
      }
      break;
    case 2:
      {
        ans = value * 2.2046;
      }
      break;
    case 3:
      {
        ans = value * 1000;
      }
      break;
    case 4:
      {
        ans = value * 35.274;
      }
      break;
    case 5:
      {
        ans = value * 0.1574;
      }
      break;
  }
  return ans;
};