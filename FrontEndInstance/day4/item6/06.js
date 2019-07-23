const inputs = document.getElementsByTagName('input');
for (const input of inputs) {
  input.addEventListener('focus', function () {
    input.style.backgroundColor = '#ccc';
  });
  input.addEventListener('blur', function () {
    input.style.backgroundColor = '#fffdec';
  });
}