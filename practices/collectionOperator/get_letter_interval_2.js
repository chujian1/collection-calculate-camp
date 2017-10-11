'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var arr = [];
  while(number_a<=number_b){
    while(number_a<26)
      arr.push(String.fromCharCode(96 + (number_a++)));
    while (number_a>=26){
      var item = number_a % 25 ;
      arr.push(String.fromCharCode(item)+String.fromCharCode(96 + (number_a-25*item)));
      number_a++;
    }
  }

  return arr;
}

module.exports = get_letter_interval_2;

