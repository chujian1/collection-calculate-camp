'use strict';

function choose_even(collection) {

  //在这里写入代码
  var arr = [];
  collection.filter(item => {
    if(item % 2 == 0)
      arr.push(item);
  });
  return arr;
}

module.exports = choose_even;
