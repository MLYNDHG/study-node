const firstLine = document.getElementsByClassName('first-line')[0];

const imgs = firstLine.getElementsByTagName('img');
for (const img of imgs) {
  img.addEventListener('mouseover', function () {
    img.style.opacity = 1;
    img.style.border = '1px solid orange';
  });
  img.addEventListener('mouseout', function () {
    if (!img.sure) {
      img.style.opacity = 0.4;
      img.style.border = 0;
    }

  });
  img.addEventListener('click', function () {
    for (const img of imgs) {
      img.sure = false;
      img.style.opacity = 0.4;
      img.style.border = 0;
    }
    img.sure = true;
    img.style.opacity = 1;
    img.style.border = '1px solid orange';
  });
}