const AllColtrol = document.getElementsByClassName('AllColtrol')[0];
const lis = document.getElementsByClassName('li');
const allSpan = document.getElementById('allSpan');
const backSpan = document.getElementById('backSpan');

//全选按钮
AllColtrol.addEventListener('click', function () {
  if (AllColtrol.checked === true) {
    for (const input of lis) {
      input.checked = true;
      allSpan.innerHTML = '全不选';
    }
  } else {
    for (const input of lis) {
      input.checked = false;
      allSpan.innerHTML = '全选';
    }
  }
});


//反选
backSpan.addEventListener('click', function () {
  for (const input of lis) {
    if (input.checked) {
      input.checked = false;
      AllColtrol.checked = false;
      allSpan.innerHTML = '全选';
    } else {
      input.checked = true;
      let sta = true;
      for (const input of lis) {
        if (!input.checked) {
          sta = false;
        }
      }
      if (sta) {
        AllColtrol.checked = true;
        allSpan.innerHTML = '全不选';
      }
    }
  }
});
//单个选
for (const input of lis) {
  let stauts = true;
  input.addEventListener("click", function () {
    if (input.checked === false) {
      stauts = false;
    }
    if (stauts === false) {
      AllColtrol.checked = false;
      allSpan.innerHTML = '全选';
    }
    let sta = true;
    for (const input of lis) {
      if (!input.checked) {
        sta = false;
      }
    }
    if (sta) {
      AllColtrol.checked = true;
      allSpan.innerHTML = '全不选';
    }
  });
}