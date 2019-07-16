const div = document.getElementById('changeMe');

function changeWidth() {
  div.style.width = '300px';
}

function changeHeight() {
  div.style.height = '300px';
}

function changeColor() {
  div.style.backgroundColor = "red";
}

function changeHide() {
  div.style.display = 'none';
}

function Origin() {
  div.style.width = '200px';
  div.style.height = '200px';
  div.style.backgroundColor = 'aqua';
  div.style.display = 'block';
}