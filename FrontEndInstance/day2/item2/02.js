let div = document.getElementsByClassName('container')[0].getElementsByTagName('div');

for (const item of div) {
  item.addEventListener('click', function () {
    alert(item.innerHTML);
  });
}