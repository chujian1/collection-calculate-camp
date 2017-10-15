'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  if(collection_a.length == collection_b.length){
    return (collection_a.every(item_a => {
      return collection_b.some(item_b => {
        return item_a == item_b;
      })
    }))
  }
  else
    return false;
}

module.exports = compare_collections;


