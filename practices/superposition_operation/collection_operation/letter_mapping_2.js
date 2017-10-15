'use strict';

function average_to_letter(collection) {
  //在这里写入代码
  var sum = 0;
  collection.forEach(item =>{sum+=item;});
  var aver = Math.ceil(sum/collection.length);
  return String.fromCharCode(aver+96);
}

module.exports = average_to_letter;

