'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var arr = [];
  collection_a.forEach(item_a => {
    collection_b.forEach(item_b =>{
      if(item_a == item_b)
        arr.push(item_a);
    });
  });
  return arr;
}

module.exports = choose_common_elements;
