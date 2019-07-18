const button = document.getElementsByTagName('button')[0];
const input = document.getElementsByTagName('input');
const sumValue = document.getElementsByClassName('sumValue')[0];

button.addEventListener('click', function () {
  sumValue.innerHTML = parseInt(input[0].value) > parseInt(input[1].value) ? parseInt(input[0].value) : parseInt(input[1].value);
});