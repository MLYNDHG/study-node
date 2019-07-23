const text = document.getElementsByClassName('text')[0];

document.onkeydown = function (event) {
  var event = event || window.event;
  text.innerHTML = event.keyCode;
  return false;
};