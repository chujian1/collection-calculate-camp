'use strict';
// error

function double_to_one(collection) {

  //在这里写入代码
   var arr = [];
  collection.forEach(item_c => {
    if(item_c.length >= 1){
      item_c.forEach(item => {
        if(!arr.indexOf(item))
          arr.push(item);
      });
    }
    else {
      if(!arr.indexOf(item_c))
        arr.push(item_c);
    }
  });
  return arr;
}

module.exports = double_to_one;
