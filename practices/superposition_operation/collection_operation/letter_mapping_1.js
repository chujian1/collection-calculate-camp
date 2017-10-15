'use strict';

function even_to_letter(collection) {
  //在这里写入代码
  var A = collection.filter(item =>{
    return item%2==0;
  });
  var C = A.map(item =>{
    return String.fromCharCode(96+item);
  });
  return C;
}

module.exports = even_to_letter;
