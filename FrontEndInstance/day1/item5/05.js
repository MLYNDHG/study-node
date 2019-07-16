const div = document.getElementById('MouseOver');

function over() {
  div.style.borderColor = 'red';
  div.style.color = 'red';
  div.style.backgroundColor = '#fff';
  div.style.cursor = 'crosshair';
}

function out() {
  div.style.borderColor = 'black';
  div.style.color = '#fff';
  div.style.backgroundColor = 'black';
}