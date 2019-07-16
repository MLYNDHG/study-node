let span = document.getElementsByTagName('span')[0];

function sum() {
  let input = document.getElementsByTagName('input')[0].value;
  let arr = input.split(',');
  arr = arr.map(x => parseInt(x));
  let sum = arr.reduce((x, y) => x + y);
  span.innerHTML = sum;
}