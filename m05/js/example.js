let userNumberInput = prompt("Please enter a number between 0 and 10:", "");

let number = parseInt(userNumberInput);
if (isNaN(number) || userNumberInput === null) {
  number = 0;
} else if (number < 0) {
  number = 0; 
} else if (number > 10) {
  number = 10; 
}

let msg = '<h2>Multiplication Table</h2>';

for (let i = 1; i <= 10; i++) {
  msg += '<li>' + i + ' x ' + number + ' = ' + (number * i) + '</li>';
}

const multiplicationTableDiv = document.getElementById('multiplicationTable');
multiplicationTableDiv.innerHTML = msg;
