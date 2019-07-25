const firstLine = document.getElementsByClassName('first-line')[0];
const body = document.getElementById('body');
const TextNum = document.getElementById('TextNum');
const button = document.getElementsByTagName('button')[0];
const discusses = document.getElementsByClassName('discuss');
const input = document.getElementsByTagName('input')[0];
const textarea = document.getElementsByTagName('textarea')[0];
const As = document.getElementById('time').getElementsByTagName('a');


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
      <span id="time"><span>${Month}月${day}日  ${Hours}:${Minutes}</span><a class="del" href="javascript:;" style="display: none;">删除</a></span>
      </div>
   </div>`);
  input.value = '';
  textarea.value = '';

});

for (let index = 0; index < discusses.length; index++) {
  const discuss = discusses[index];
  discuss.addEventListener('mouseover', function () {
    As[index].style.display = 'block';
  });
  discuss.addEventListener('mouseout', function () {
    As[index].style.display = 'none';
  });
}

for (let index = 0; index < As.length; index++) {
  const a = As[index];
  a.addEventListener('click', function () {

  });
}