'use strict';
var number_map_to_word = function(collection){
  return collection.map(item => {
    return String.fromCharCode(96+item);
  });
};

module.exports = number_map_to_word;
