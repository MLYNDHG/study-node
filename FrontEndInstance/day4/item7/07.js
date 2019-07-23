let arr0 = ['January(1)', 'February(2)', 'March(3)', 'April(4)', 'May(5)', 'June(6)', 'July(7)', 'Aguest(8)', 'September(9)', 'October(10)', 'November(11)', 'December(12)'];
let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = ['red', 'green', 'blue', 'white', 'yellow', 'black', 'brown'];

const pres = document.getElementsByTagName('pre');
pres[1].innerHTML = arr1.join(',');
pres[2].innerHTML = arr2.join(',');
pres[0].innerHTML = arr0.join(',');


const item1s = document.getElementsByClassName('item1');
const item2s = document.getElementsByClassName('item2');
const item3s = document.getElementsByClassName('item3');
//pre[0]
item1s[0].addEventListener('click', function () {
  if (arr0[0] === 'January(1)') {
    arr0.shift();
    item1s[0].innerHTML = '添加January(1)';
    pres[0].innerHTML = arr0.join(',');
  } else {
    arr0.unshift('January(1)');
    item1s[0].innerHTML = '删除January(1)';
    pres[0].innerHTML = arr0.join(',');
  }
});
item1s[1].addEventListener('click', function () {
  if (arr0[arr0.length - 1] === 'December(12)') {
    arr0.pop();
    item1s[1].innerHTML = '添加December(12)';
    pres[0].innerHTML = arr0.join(',');
  } else {
    arr0.push('December(12)');
    item1s[1].innerHTML = '删除December(12)';
    pres[0].innerHTML = arr0.join(',');
  }
});
//pre[1]
item2s[0].addEventListener('click', function () {
  arr1 = arr1.concat(arr1.slice(0))
  pres[1].innerHTML = arr1.join(',');
});
item2s[1].addEventListener('click', function () {
  arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  pres[1].innerHTML = arr1.join(',');
});

//pre[2]
item3s[0].addEventListener('click', function () {
  arr2 = ['red', 'green', 'blue', 'white', 'yellow', 'black', 'brown'];
  pres[2].innerHTML = arr2.join(',');
});
item3s[1].addEventListener('click', function () {
  arr2.splice(0, 3);
  pres[2].innerHTML = arr2.join(',');
});
item3s[2].addEventListener('click', function () {
  arr2.splice(1, 2);
  pres[2].innerHTML = arr2.join(',');
});
item3s[3].addEventListener('click', function () {
  arr2.splice(1, 0, 'orange', 'purple');
  pres[2].innerHTML = arr2.join(',');
});
item3s[4].addEventListener('click', function () {

  arr2.splice(1, 2, '#009900', '#0000ff');
  pres[2].innerHTML = arr2.join(',');
});