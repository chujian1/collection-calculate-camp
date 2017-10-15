'use strict';
function map_to_even(collection){
  var arr = [];
  arr = collection.map(item => {
    return item*2;
  });
  return arr;
}
module.exports = map_to_even;
