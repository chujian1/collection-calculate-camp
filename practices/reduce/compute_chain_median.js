'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var arr = collection.split("->");
  arr.sort((a,b)=>{return a-b;});
  var length = arr.length;
  if(length%2==0){
    return parseFloat(((parseInt(arr[Math.floor(length/2)-1])+parseInt(arr[Math.floor(length/2)]))/2).toFixed(1));
  }
  else
    return arr[Math.floor(length/2)];
}

module.exports = compute_chain_median;
