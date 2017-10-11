'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var arr = [];
  collection_a.forEach(item_a => {
    collection_b.forEach(item_b =>{
      if(item_a % item_b == 0)
        arr.push(item_a);
    });
  });
  return arr;
}

module.exports = choose_divisible_integer;
