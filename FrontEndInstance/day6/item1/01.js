const head = document.getElementsByClassName('head')[0];
const container = document.getElementsByClassName('container')[0];
const history = document.getElementById('history');
const body = document.getElementsByTagName('body')[0];

//mouse_press   保存当前状态  是不是左键还是按下状态   在按下状态添加鼠标移入移出事件   在弹起状态移除鼠标移入移出事件
let mouse_press = {};

//获取点击时的height  width
let width = '';
let height = '';
head.onmousedown = function (event) {
  var e = event || window.event;
  mouse_press[e.button] = true;
  width = e.clientX - parseInt(window.getComputedStyle(container)['left']);
  height = e.clientY - parseInt(window.getComputedStyle(container)['top']);
};
head.onmouseup = function (event) {
  var e = event || window.event;
  mouse_press[e.button] = false;
};
//将移动路径放入数组中 
let PassSrc = [];
let myFunc = function (event) {
  var e = event || window.event;
  const obj = new Object();
  obj[parseInt(window.getComputedStyle(container)['left'].slice(0, -2))] = parseInt(window.getComputedStyle(container)['top']);
  PassSrc.push(obj);
  container.style.left = e.clientX - width + 'px';
  container.style.top = e.clientY - height + 'px';
}
setInterval(function () {
  if (mouse_press[0]) {
    body.addEventListener('mousemove', myFunc);
  }
  if (!mouse_press[0]) {
    body.removeEventListener('mousemove', myFunc); //移除监听事件EventListener   第二个参数为句柄
  }
}, 50);


//回放历史
history.addEventListener('click', function () {
  PassSrc.reverse();
  let position = 0;
  let set = setInterval(function () {
    console.log(PassSrc[position]);
    if (PassSrc[position] === undefined) {
      clearInterval(set);
    }
    for (const key in PassSrc[position]) {
      container.style.left = key + 'px';
      container.style.top = PassSrc[position][key] + 'px';
    }
    position++;
    PassSrc.shift();
    console.log(PassSrc);
  }, 50);
});