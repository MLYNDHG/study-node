const tltle = document.getElementsByClassName("title")[0];
const centent = document.getElementsByClassName("centent")[0];
const lis = tltle.getElementsByTagName('li');
const uls = centent.getElementsByTagName('ul');

for (let index = 0; index < lis.length; index++) {
  lis[index].addEventListener('mousemove', function () {
    for (const li of lis) {
      li.style.backgroundColor = "#000";
    }
    for (const ul of uls) {
      ul.style.display = "none";
    }
    lis[index].style.backgroundColor = "#ccc";
    uls[index].style.display = "block";
  });

}