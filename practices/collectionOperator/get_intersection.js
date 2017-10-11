'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var arr = [];
  collection_b.map(item_b => {
    collection_a.map(item_a => {
      if(item_b == item_a)
        arr.push(item_b);
    });
  });
  return arr;
}

module.exports = get_intersection;
