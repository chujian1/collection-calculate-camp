'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var arr = [];
  collection.forEach(item_a => {
   if(!arr.some(item_b => {
       return (item_a == item_b)
     }))
     arr.push(item_a);
  });
  return arr;
}

module.exports = choose_no_repeat_number;
