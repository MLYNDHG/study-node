const container = document.getElementsByClassName('container')[0];

container.addEventListener('click', function () {
  let setInter = setInterval(function () {
    console.log(window.getComputedStyle(container)['display']);
    if (window.getComputedStyle(container)['display'] === 'block') {
      container.style.display = 'none';
    } else {
      container.style.display = 'block';
    }
  }, 100);
  setTimeout(function () {
    clearInterval(setInter);
    container.style.display = 'block';
  }, 1000)
});