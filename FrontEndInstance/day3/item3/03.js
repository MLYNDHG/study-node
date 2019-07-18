const button = document.getElementsByTagName('input')[0];

button.addEventListener('click', function () {
  console.log(button.value);
  button.value++;
});