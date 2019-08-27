const firstLine = document.getElementsByClassName('first-line')[0];
const body = document.getElementById('body');
const TextNum = document.getElementById('TextNum');
const button = document.getElementsByTagName('button')[0];
let discusses = document.getElementsByClassName('discuss');
const input = document.getElementsByTagName('input')[0];
const textarea = document.getElementsByTagName('textarea')[0];
let As = document.getElementsByClassName('del');


const imgs = firstLine.getElementsByTagName('img');
let imgsrc = './1.jpg';
for (const img of imgs) {
  img.addEventListener('mouseover', function () {
    img.classList.remove('native');
    img.classList.add('active');
  });
  img.addEventListener('mouseout', function () {
    if (!img.sure) {
      img.classList.remove('active');
      img.classList.add('native');
    }
  });
  img.addEventListener('click', function () {
    for (const img of imgs) {
      img.sure = false;
      img.classList.add('native');
    }
    img.sure = true;
    img.classList.remove('native');
    img.classList.add('active');
    imgsrc = img.src;
  });
}
for (let index = 0; index < discusses.length; index++) {
  const discuss = discusses[index];
  discuss.onmouseover = function () {
    As[index].style.display = 'block';
  }

  discuss.onmouseout = function () {
    As[index].style.display = 'none';
  }

}
//点击按钮
button.addEventListener('click', function () {
  if (input.value.length < 2) {
    alert('输入昵称');
    return false;
  }
  if (textarea.value.length >= 140) {
    alert('超出140');
    return false;
  } else if (textarea.value.length === 0) {
    alert('说点什么呢？');
    return false;
  }
  let dis = '';
  if (textarea.value.length <= 20) {
    dis = `<span><a href="javascript:">${input.value}:</a>${textarea.value}</span>`;
  } else {
    dis = `<span><a href="javascript:">${input.value}:</a></span>
           <span>${textarea.value}</span>`;
  }
  let time = new Date();
  const Month = time.getMonth() + 1;
  const day = time.getDate();

  const Hours = time.getHours();
  const Minutes = time.getMinutes();

  discusses[0].insertAdjacentHTML('beforeBegin',
    `<div class="discuss">
      <div class="leftImg">
      <img src="${imgsrc}" width="60" height="60">
     </div>
     <div class="rightAricale">
     ${dis}      
      <span class="time"><span>${Month}月${day}日  ${Hours}:${Minutes}</span><a class="del" href="javascript:;" style="display: none;">删除</a></span>
      </div>
   </div>`);
  input.value = '';
  textarea.value = '';
  refalsh();
});
//重新渲染事件
function refalsh() {
  discusses = document.getElementsByClassName('discuss');
  As = document.getElementsByClassName('del');
  for (let index = 0; index < discusses.length; index++) {
    const discuss = discusses[index];
    discuss.onmouseover = function () {
      As[index].style.display = 'block';
    }

    discuss.onmouseout = function () {
      As[index].style.display = 'none';
    }

    As[index].onclick = function () {
      // body.removeChild(discusses[index]);
      discusses[index].style.display = 'none';
      refalsh();
    };
  }
}

//给a标签添加事件
for (let index = 0; index < As.length; index++) {
  const a = As[index];
  a.onclick = function () {
    // body.removeChild(discusses[index].style.display = 'block';);
    discusses[index].style.display = 'none';
  };
}