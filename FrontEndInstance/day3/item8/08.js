window.onload = function () {
  const inputs = document.getElementsByTagName('input');

  function getDate() {
    const date = new Date();
    inputs[0].value = date.getHours();
    inputs[1].value = date.getMinutes();
    inputs[2].value = date.getSeconds();
    inputs[3].value = date.getMilliseconds();
  }
  setInterval(getDate, 10);
}