const divs = document.getElementsByClassName('content')[0].getElementsByTagName('div');
const imgs = document.getElementsByTagName('img');

for (let index = 0; index < divs.length; index++) {
  divs[index].addEventListener('mousemove', function () {
    for (const img of imgs) {
      img.classList.remove('showImg');
    }
    imgs[index].classList.add('showImg');
  });
  imgs[index].addEventListener('mouseout', function () {
    imgs[index].classList.remove('showImg');
  });
}