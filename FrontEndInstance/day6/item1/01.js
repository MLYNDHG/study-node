const head = document.getElementsByClassName("head")[0];
const container = document.getElementsByClassName("container")[0];
const history = document.getElementById("history");
const body = document.getElementsByTagName("body")[0];
const bs = document.getElementsByTagName('b');
//三个状态值
let DragSt = false;
let PositionX = '200px'
let PositionY = '200px'
//初始化状态
stauts();
//mouse_press   保存当前状态  是不是左键还是按下状态   在按下状态添加鼠标移入移出事件   在弹起状态移除鼠标移入移出事件
let mouse_press = {};

//获取点击时的height  width
let width = "";
let height = "";
head.onmousedown = function (event) {
  DragSt = true;
  var e = event || window.event;
  mouse_press[e.button] = true;
  width = e.clientX - parseInt(window.getComputedStyle(container)["left"]);
  height = e.clientY - parseInt(window.getComputedStyle(container)["top"]);
  stauts();
};
document.onmouseup = function (event) {
  DragSt = false;
  var e = event || window.event;
  mouse_press[e.button] = false;
  stauts();
};
//将移动路径放入数组中
let PassSrc = [];
let myFunc = function (event) {
  var e = event || window.event;
  const obj = new Object();
  obj[
    parseInt(window.getComputedStyle(container)["left"].slice(0, -2))
  ] = parseInt(window.getComputedStyle(container)["top"]);
  PassSrc.push(obj);

  //left  top  分别为container  距离左边的宽度  及  上方的高度  
  let left = e.clientX - width + "px";
  let top = e.clientY - height + "px";
  //container不可以移出body外
  if (left.slice(0, -2) < 0) {
    left = 0 + 'px';
  } else if (left.slice(0, -2) > window.innerWidth - container.offsetWidth) {
    left = window.innerWidth - container.offsetWidth;
  }

  if (top.slice(0, -2) < 0) {
    top = 0 + 'px';
  } else if (top.slice(0, -2) > window.innerHeight - container.offsetHeight) {
    top = window.innerHeight - container.offsetHeight;
  }
  PositionX = left;
  PositionY = top;
  container.style.left = left;
  container.style.top = top;
  stauts();
};
//定时器检查状态  做判断
setInterval(function () {
  if (mouse_press[0]) {
    document.addEventListener("mousemove", myFunc);
  }
  if (!mouse_press[0]) {
    document.removeEventListener("mousemove", myFunc); //移除监听事件EventListener   第二个参数为句柄
  }
}, 50);

//更新状态
function stauts() {
  bs[0].innerHTML = DragSt;
  bs[1].innerHTML = PositionX;
  bs[2].innerHTML = PositionY;
}


//回放历史
history.addEventListener("click", function () {
  PassSrc.reverse();
  let position = 0;
  let set = setInterval(function () {
    if (PassSrc[position] === undefined) {
      clearInterval(set);
      PassSrc = [];
    }
    for (const key in PassSrc[position]) {
      container.style.left = key + "px";
      container.style.top = PassSrc[position][key] + "px";
      PositionX = key + "px";
      PositionY = PassSrc[position][key] + "px";
    }

    stauts();
    position++;
  }, 50);
});