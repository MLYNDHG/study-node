const ul = document.getElementById('ul');

//右键点击
document.oncontextmenu = function (event) {
  var e = event || window.event;
  ul.style.display = 'block';
  ul.style.left = e.clientX + 'px';
  ul.style.top = e.clientY + 'px';
  return false;
}

//左键隐藏
document.onmousedown = function (event) {
  var e = event || window.event;
  if (e.button === 0) {
    ul.style.display = 'none';
  };
}