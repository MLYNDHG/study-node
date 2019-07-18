const AllBtns = document.getElementsByTagName('button');
const fhBtns = document.getElementsByClassName('fh');
const numBtns = document.getElementsByClassName('num');
const history = document.getElementsByClassName('history')[0];
const now = document.getElementsByClassName('now')[0];

let Arr = [];

//处理数字按键的方法
//按下就添加进数组
//判断当前输入暂存区是什么   如果是字符就重新赋值 否则 累加
for (const numBtn of numBtns) {
  numBtn.addEventListener('click', function () {
    Arr.push(numBtn.innerHTML);
    if (now.value.endsWith('%') || now.value.endsWith('+') || now.value.endsWith('-') || now.value.endsWith('*') || now.value.endsWith('/')) {
      now.value = numBtn.innerHTML;
    } else {
      now.value += numBtn.innerHTML;
    }
    now.value = parseFloat(now.value);
  });
}

for (const fhBtn of fhBtns) {
  fhBtn.addEventListener('click', function () {
    switch (fhBtn.innerHTML) {
      case 'C':
        Arr.length = 0;
        now.value = 0;
        history.value = '';
        break;
      case '%':
        Operator('%');
        break;
      case '/':
        Operator('/');
        break;
      case '*':
        Operator('*');
        break;
      case '-':
        Operator('-');
        break;
      case '+':
        Operator('+');
        break;
      case '=':
        //当输入暂存区为运算符时  删掉数组最后一位  进行计算
        //否则将数字添入数组  进行运算

        //并且将  栈（数组） 清空  添入结果
        if (now.value.endsWith('%') || now.value.endsWith('+') || now.value.endsWith('-') || now.value.endsWith('*') || now.value.endsWith('/')) {
          Arr.pop();
          let str = Arr.join('');
          now.value = calculator(str).toFixed(4);
          Arr.length = 0;
          Arr.push(now.value);
          history.value = Arr.join('');
        } else {
          history.value = Arr.join('');
          now.value = calculator(history.value).toFixed(4);
          Arr.length = 0;
          Arr.push(now.value);
          history.value = Arr.join('');
        }
        break;
      case '.':
        //要判断输出结果的数组中是否包含'.'     string.includes('str');
        if (!Arr.join('').includes('.')) {
          Operator('.');
        }
        break;
      default:
        break;
    }
  });
}

//封装（字符串 算数 运算） 函数
let calculator = function (str) {
  return new Function("return (" + str + ")")();
}

//封装运算符操作  函数
function Operator(op) {
  if (Arr[Arr.length - 1] !== '%' && Arr[Arr.length - 1] !== '+' && Arr[Arr.length - 1] !== '-' && Arr[Arr.length - 1] !== '*' && Arr[Arr.length - 1] !== '/') {
    Arr.push(op);
  }
  now.value = op;
  history.value = Arr.join('');
}