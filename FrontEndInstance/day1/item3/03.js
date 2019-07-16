function getArgs() {
  const input = document.getElementsByTagName('input');

  for (const item of input) {
    alert(item.value);
  }
}