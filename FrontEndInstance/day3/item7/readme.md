网页计算器

//封装字符串 算数
let calculator = function (str) {
return new Function("return (" + str + ")")();
}

注意：
用一个 数组（栈）来 保存输入的 数字 运算符
最后使用 array.join('');链接 使用上方的函数来计算数组连结成的字符串

添加进数组时要注意 运算符不要连续添加两个 即可
