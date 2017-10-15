'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var A = collection.filter(item => {
    return item % 2 != 0;
  });
  return A.map(item => {
    return Math.round(item * 3 + 2);
  });
}

module.exports = hybrid_operation_to_uneven;

