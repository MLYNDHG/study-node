const imgs = document.getElementsByClassName('img');
const tips = document.getElementsByClassName('tip');
const title = document.getElementsByClassName('title')[0];

//两个值保存状态用来做判断
let showIndex = 0;
let show = false;

//点击保存状态
for (let index = 0; index < imgs.length; index++) {
  const img = imgs[index];
  img.addEventListener('click', function () {
    showIndex = index;
    show = true;
    for (const tip of tips) {
      tip.style.display = 'none';
    }
    title.innerHTML = tips[index].innerHTML;
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].classList.remove('show');
    }
    for (let i = 0; i <= index; i++) {
      imgs[i].classList.add('show');
    }
  });
}


//前面的亮  后面的不亮
for (let index = 0; index < imgs.length; index++) {
  const img = imgs[index];
  img.addEventListener('mousemove', function () {
    for (const tip of tips) {
      tip.style.display = 'none';
    }
    tips[index].style.display = 'block';
    for (let i = 0; i <= index; i++) {
      imgs[i].classList.add('show');
    }
    for (let i = index + 1; i < imgs.length; i++) {
      imgs[i].classList.remove('show');
    }
  });

  //鼠标移出
  img.addEventListener('mouseout', function () {
    if (show) {
      for (let i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove('show');
      }
      for (let i = 0; i <= showIndex; i++) {
        imgs[i].classList.add('show');
      }
      for (const tip of tips) {
        tip.style.display = 'none';
      }
    } else {
      for (const tip of tips) {
        tip.style.display = 'none';
      }
      for (let i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove('show');
      }
    }
  });
}