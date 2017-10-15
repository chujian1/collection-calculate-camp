'use strict';
var calculate_median = function(collection){
  var even = collection.filter(item =>{return (collection.indexOf(item)+1)%2==0;});
  console.log(even);
  if(even.length%2==0)
    return Math.round((even[Math.floor(even.length/2)-1]+even[Math.floor(even.length/2)])/2);
  else
    return even[Math.floor(even.length/2)];
};
module.exports = calculate_median;
