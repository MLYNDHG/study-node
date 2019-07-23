const input = document.getElementById('input');
const list = document.getElementsByClassName('list')[0];
const button = document.getElementsByClassName('button')[0];

const lis = list.getElementsByTagName('li');

input.addEventListener('mousemove', function () {
  input.classList.remove('input');
  input.classList.add('clickTrm');

});
input.addEventListener('mouseout', function () {
  input.classList.remove('clickTrm');
  input.classList.add('input');
});

button.addEventListener('click', function () {
  if (window.getComputedStyle(list)['display'] === 'none') { //getComputedStyle可以获取外联样式  但是不可以设置值
    list.style.display = 'block';
  } else {
    list.style.display = 'none';
  }
});

for (const li of lis) {
  li.addEventListener('click', function () {
    list.style.display = 'none';
    button.innerHTML = li.innerHTML;
  });
}