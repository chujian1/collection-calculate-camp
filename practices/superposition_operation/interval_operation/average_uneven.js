'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var A = collection.filter(item =>{return (item>=1 && item<10 && item%2!=0);});
  var sum = 0;
  A.forEach(item =>{sum+=item;});
  return Math.round(sum/A.length);
}

module.exports = average_uneven;
