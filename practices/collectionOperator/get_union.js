'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var arr = collection_a;
  collection_b.map(item => {
    var flag = collection_a.indexOf(item);
    if(flag < 0)
      arr.push(item);
  });
  return arr;
}

module.exports = get_union;

