const spans = document.getElementsByTagName('span');
const img = document.getElementsByTagName('img')[0];
let index = 0;
spans[index].style.opacity = 1;

let onload = setInterval(function () {
  for (const span of spans) {
    span.style.opacity = 0.6;
  }
  index += 2;
  if (index > 4) {
    index -= 5;
  }
  spans[index].style.opacity = 1;
  img.setAttribute('src', './' + index + '.jpg');
}, 1000);

for (let index = 0; index < spans.length; index++) {
  spans[index].addEventListener('mousemove', function () {
    clearInterval(onload);
    for (const span of spans) {
      span.style.opacity = 0.6;
    }
    spans[index].style.opacity = 1;
    img.setAttribute('src', './' + index + '.jpg');
  });
  spans[index].addEventListener('mouseout', function () {
    onload = setInterval(function () {
      for (const span of spans) {
        span.style.opacity = 0.6;
      }
      index += 2;
      if (index > 4) {
        index -= 5;
      }
      spans[index].style.opacity = 1;
      img.setAttribute('src', './' + index + '.jpg');
    }, 1000);
  });


}