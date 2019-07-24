const ul = document.getElementsByTagName('ul')[0];
const lis = document.getElementsByTagName('li');

document.oncontextmenu = function (event) {
  var e = event || window.event;
  ul.style.display = 'block';
  ul.style.top = e.clientY + 'px';
  ul.style.left = e.clientX + 'px';
  return false;
}

document.onclick = function () {
  ul.style.display = 'none';
}

for (const li of lis) {
  li.addEventListener('mouseover', function () {
    li.style.backgroundColor = '#8f8f8f';
  });
  li.addEventListener('mouseout', function () {
    li.style.backgroundColor = '#fff';
  });
}