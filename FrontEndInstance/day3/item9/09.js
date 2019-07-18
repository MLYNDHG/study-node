const button = document.getElementsByTagName('button')[0];
const inputs = document.getElementsByTagName('input');

button.style.backgroundColor = 'green'
let setIntervalN = '';
button.addEventListener('click', function () {
  if (button.style.backgroundColor === 'red') {
    button.style.backgroundColor = 'green';
    button.innerHTML = '开启';
    clearInterval(setIntervalN);
    return;
  }
  if (button.style.backgroundColor === 'green') {
    button.style.backgroundColor = 'red';
    button.innerHTML = '取消';
    setIntervalN = setInterval(setTime, 1000);
    return;
  }
});


function setTime() {
  if (parseInt(inputs[1].value) > 0) {
    inputs[1].value--;
  } else {
    if (parseInt(inputs[0].value) > 0) {
      inputs[0].value--;
      inputs[1].value = 60;
    } else {
      button.click();
    }
  }
}