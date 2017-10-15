'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var A = collection.map(item =>{return Math.round(item*3+2);})
  var sum = 0;
  A.forEach(item =>{sum+=item;});
  return Math.round(sum);
}

module.exports = hybrid_operation;

