'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var A = collection.filter(item => {
    return item % 2 != 0;
  });
  var B = A.map(item => {
    return Math.round(item * 3 + 5);
  });
  var sum = 0;
  B.forEach(item =>{sum+=item;});
  return Math.round(sum);
}

module.exports = hybrid_operation_to_uneven;

