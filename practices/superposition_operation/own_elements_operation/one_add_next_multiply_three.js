'use strict';
function one_add_next_multiply_three(collection){
  var arr = [];
  collection.forEach(item =>{
    var index = collection.indexOf(item);
    if(index<(collection.length-1))
      arr.push(Math.round((item+collection[index+1])*3));
  });
  return arr;
}
module.exports = one_add_next_multiply_three;
