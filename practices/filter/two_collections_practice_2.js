'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var arr = [];
  collection_a.forEach(item_a => {
    if(collection_b.every(item_b =>{
      return (item_a != item_b)
    }))
      arr.push(item_a);
  });
  return arr;
}

module.exports = choose_no_common_elements;
