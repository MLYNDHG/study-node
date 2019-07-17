const title = document.getElementsByClassName('title')[0];
const ul = document.getElementsByTagName('ul')[0];
const span = document.getElementsByTagName('span')[0];

title.addEventListener('click', function () {
  if (ul.style.display === 'block') {
    ul.style.display = "none";
    span.classList.add('transform');
  } else {
    ul.style.display = "block";
    span.classList.remove('transform');
  }
});