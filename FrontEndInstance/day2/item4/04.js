const input = document.getElementsByTagName('button')[0];
const span = document.getElementsByTagName('span')[0];
const mask = document.getElementsByClassName('Mask')[0];

input.addEventListener("click", function () {
  mask.style.display = 'block';
});

span.addEventListener('click', function () {
  mask.style.display = 'none';
});