'use strict';

function compute_median(collection) {
  //在这里写入代码
  collection.sort((a,b)=>{return a-b;});
  var length = collection.length;
  if(length%2==0){
    return (collection[length/2-1]+collection[(length/2)])/2;
  }
  else
    return collection[Math.round(length/2)-1];
}

module.exports = compute_median;


