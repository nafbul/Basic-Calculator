function addToDisplay(value) {
    document.getElementById('result').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('result').value = '';
  }
  
  function calculate() {
    var expression = document.getElementById('result').value;
    var result = eval(expression);
    document.getElementById('result').value = result;
  }
