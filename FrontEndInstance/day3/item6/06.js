const input = document.getElementsByTagName('input')[0];
const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function () {
  input.value.split('').length === 2 ? alert('是两位数') : alert('不是两位数');
});