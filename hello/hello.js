'use strict'
const name = 'luxifel';

let sayGreet = function () {
  console.log(`Hello，${name}`);
}
//sayGreet();
//将此js  变成模块
module.exports = sayGreet;