'use strict';
var rank_asc = function(collection){
  return collection.sort((a,b) =>{
    return a-b;
  }).reverse();
};

module.exports = rank_asc;
