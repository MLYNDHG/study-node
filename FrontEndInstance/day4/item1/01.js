const lis = document.getElementsByTagName('li');
const divs = document.getElementsByClassName('subnav');

for (let index = 1; index < lis.length; index++) {
  lis[index].addEventListener('mousemove', function () {
    divs[index].style.display = "block";
  });
  lis[index].addEventListener('mouseout', function () {
    divs[index].style.display = "none";
  });
}