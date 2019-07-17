const smallImg = document.getElementsByClassName('smallImg');
const bigImg = document.getElementsByClassName('bigImg')[0];

for (const sImg of smallImg) {
  sImg.addEventListener('mousemove', function () {
    bigImg.setAttribute('src', sImg.src);
  });
}