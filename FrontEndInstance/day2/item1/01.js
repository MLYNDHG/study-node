let ul = document.getElementsByTagName('ul')[0];
let li = ul.getElementsByTagName('li');


for (const item of li) {
  item.addEventListener("mousemove", function () {
    item.style.backgroundColor = '#0000ff73';
  });
  item.addEventListener("mouseout", function () {
    item.style.backgroundColor = '#FFFFFF';
  });
}


function show() {
  if (ul.style.display === 'none') {
    ul.style.display = 'block';
  } else {
    ul.style.display = 'none';
  }
}

function hiden() {
  ul.style.display = 'none';
}