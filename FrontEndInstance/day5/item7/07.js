const box = document.getElementById('box');

let key_press = {};
document.onkeydown = function (event) {
  let e = event || window.event;
  key_press[e.keyCode] = true;
}
document.onkeyup = function (event) {
  let e = event || window.event;
  key_press[e.keyCode] = false;
}

//左上右下 : 37 38 39 40
//ctrl : 17
//1 2 3  :  49 50 51    


setInterval(function () {
  if (key_press[37]) {
    box.style.left = parseInt(box.style.left.slice(0, -2)) - 5 + 'px';
  }
  if (!key_press[17] && key_press[38]) {
    box.style.top = parseInt(box.style.top.slice(0, -2)) - 5 + 'px';
  }
  if (key_press[39]) {
    box.style.left = parseInt(box.style.left.slice(0, -2)) + 5 + 'px';
  }
  if (!key_press[17] && key_press[40]) {
    box.style.top = parseInt(box.style.top.slice(0, -2)) + 5 + 'px';
  }
  if (key_press[17] && key_press[49]) {
    box.style.backgroundColor = 'green';
  }
  if (key_press[17] && key_press[50]) {
    box.style.backgroundColor = 'yellow';
  }
  if (key_press[17] && key_press[51]) {
    box.style.backgroundColor = 'blue';
  }
  if (key_press[17] && key_press[38]) {
    if (parseInt(box.style.width.slice(0, -2)) > 2000) {
      box.style.width = parseInt(box.style.width.slice(0, -2)) + 5 + 'px';
      box.style.height = parseInt(box.style.height.slice(0, -2)) + 5 + 'px';
    } else if (parseInt(box.style.width.slice(0, -2)) < 943148) {
      box.style.width = parseInt(box.style.width.slice(0, -2)) + 5 + 'px';
      box.style.height = parseInt(box.style.height.slice(0, -2)) + 5 + 'px';
    }
  }
  if (key_press[17] && key_press[40]) {
    if (parseInt(box.style.width.slice(0, -2)) > 0.1) {
      box.style.width = parseInt(box.style.width.slice(0, -2)) - 5 + 'px';
      box.style.height = parseInt(box.style.height.slice(0, -2)) - 5 + 'px';
    }
  }
}, 10);