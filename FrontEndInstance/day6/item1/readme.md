完美拖拽

//
在鼠标按下(onmousedown)的状态下 移动鼠标(onmousemove)

1.保存一个状态 按下为 true 松开 false

然后一个定时器 定时判断当前状态  
 为 true 时可以拖动( document.addEventListener("mousemove", myFunc);)  
 为 false 时不可拖动( document.removeEventListener("mousemove", myFunc);)//移除监听事件 EventListener 第二个参数为句柄

offsetWidth 为 box 距 offsetParent 的距离

window.innerWidth 页面可视宽度
e.ClientX-offsetWidth 为 box 偏移的位置

innerWidth 为页面的可视总宽度

box.offsetWidth=box.clientWidth+border=box.width+border+padding
