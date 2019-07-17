const inputs = document.getElementsByTagName('input');
const buttons = document.getElementsByTagName('button');
const div = document.getElementsByClassName('changeDiv')[0];

buttons[0].addEventListener('click', function () {
  div.setAttribute('style', inputs[0].value + ':' + inputs[1].value);
});

buttons[1].addEventListener('click', function () {
  div.setAttribute('style', 'width: 200px;height: 200px;background-color: black;  color: #fff;');
});