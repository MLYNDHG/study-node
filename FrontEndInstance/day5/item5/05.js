const imgs = document.getElementsByTagName("img");
const imgdiv = document.getElementById("imgdiv");
const moveImg = document.getElementById("moveImg");

for (const img of imgs) {
  img.addEventListener("mouseover", function (event) {
    moveImg.style.display = 'block';
    var event = event || window.event;
  });
  img.addEventListener('mousemove', function () { //移动一次就触发一次  显示隐藏应该使用  mouseover  mouseout
    const nowImg = img.getAttribute("src");
    moveImg.setAttribute("src", nowImg);
    imgdiv.style.top = event.clientY + 20 + 'px';
    imgdiv.style.left = event.clientX + 20 + 'px';
  });
  img.addEventListener("mouseout", function () {
    moveImg.style.display = 'none';
  });
}