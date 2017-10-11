'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  var arr = [];
  collection.filter(item => {
    if(item % 3 == 0)
      arr.push(item);
  });
  return arr;
}

module.exports = choose_multiples_of_three;
