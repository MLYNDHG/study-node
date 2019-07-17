const imgs = document.getElementsByTagName('img');

for (const img of imgs) {
  img.addEventListener('mousemove', function () {
    img.style.opacity = '1';
  });
  img.addEventListener('mouseout', function () {
    img.style.opacity = '0.3';
  });
}