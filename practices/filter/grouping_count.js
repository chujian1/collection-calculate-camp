'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var obj = {};
  var arr = [];
  var count = 0;
  collection.forEach(item_c => {
    if (!arr.some(item_o => {
      return (item_o == item_c)
    })){
      collection.forEach(item => {
        if(item == item_c)
          count++;
      });
      arr.push(item_c);
      obj[item_c] = count;
      count = 0;
  }
  });
  return obj;
}

module.exports = grouping_count;
