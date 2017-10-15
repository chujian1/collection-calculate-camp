'use strict';
var calculate_average = function(collection){
  var even = collection.filter(item =>{return (collection.indexOf(item)+1)%2==0;});
  var sum = 0;
  even.forEach(item =>{sum+=item;});
  return Math.round(sum/even.length);
};
module.exports = calculate_average;
