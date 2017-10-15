'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var arr = [];
  var flag = 1;
  arr.push(number);
  while(flag){
    number = parseFloat(parseFloat(number - interval).toFixed(1));
    arr.push(number);
    if(number<=0)
      flag = 0;
  }
  return arr;
}

module.exports = spilt_to_zero;
