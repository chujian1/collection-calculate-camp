'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  const evenArr = [];
  collection.map(item =>{
    if(item!=0 && item%2==0)
      evenArr.push(item);
  });
   return evenArr;
}

module.exports = collect_all_even;
