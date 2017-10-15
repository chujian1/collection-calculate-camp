'use strict';

function compute_average(collection) {
  //在这里写入代码
  var length = collection.length;
  var sum = 0.0;
  collection.forEach(item => {
    sum +=item;
  });
  return sum/length;
}

module.exports = compute_average;

