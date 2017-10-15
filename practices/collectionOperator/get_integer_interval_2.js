'use strict';
function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var arr = [];

  if(number_a <= number_b){
    number_a%2?++number_a:number_a;
    while(number_a<=number_b){
      arr.push(number_a);
      number_a+=2;
    }
  }
  else{
    number_a%2?++number_a:number_a;
    while(number_a>=number_b){
      arr.push(number_a);
      number_a-=2;
    }
  }
  return arr;
}

module.exports = get_integer_interval_2;
