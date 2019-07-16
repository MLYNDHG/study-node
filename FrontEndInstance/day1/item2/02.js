function changeColor(backcolor, color, event) {
  //获取所有带有ChangeColor的元素
  document.getElementsByClassName('ChangeColor')[0].style.backgroundColor = backcolor;
  //获取所有li
  let nav = document.getElementsByClassName('Nav')[0].getElementsByTagName('li');
  for (const li of nav) {
    li.style.backgroundColor = color;
  }
  let btn = document.getElementsByClassName('button')[0].getElementsByTagName('li');

  for (const li of btn) {
    const borc = li.style.borderColor;
    const nackc = li.style.backgroundColor;
    li.setAttribute('style', 'border: 5px solid ' + borc + ';background-color: ' + borc + ';');
  }

  event.target.setAttribute('style', 'border: 5px solid ' + color + ';background-color: #FFF;');
}