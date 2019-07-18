window.onload = function () {
  let addSelf = document.getElementById('addSelf');
  setInterval(function () {
    addSelf.innerHTML++
  }, 1000);
}