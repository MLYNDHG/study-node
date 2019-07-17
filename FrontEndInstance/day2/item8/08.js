const divList = document.getElementsByClassName('mounth')[0].getElementsByTagName('div');
const divArticle = document.getElementsByClassName('Article')[0].getElementsByTagName('div');

divList[6].style.backgroundColor = "#fff";
divList[6].style.color = "#F69";

for (let index = 0; index < divList.length; index++) {
  divList[index].addEventListener("mousemove", function () {
    for (const div of divList) {
      div.style.backgroundColor = '#424242';
      div.style.color = '#FFF';
    }
    for (const div of divArticle) {
      div.style.display = "none";
    }
    divArticle[index].style.display = "block";
    divList[index].style.backgroundColor = "#fff";
    divList[index].style.color = "#F69";
  });

}