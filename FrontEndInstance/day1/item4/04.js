let changeDiv = document.getElementsByClassName("changeDiv")[0].getElementsByTagName('div');
for (const item of changeDiv) {
  item.style.width = '100px';
  item.style.height = '100px';
  item.style.backgroundColor = 'black';
  item.style.margin = '10px';
}

function changeColor() {
  for (const item of changeDiv) {
    item.style.backgroundColor = 'red';
  }
}