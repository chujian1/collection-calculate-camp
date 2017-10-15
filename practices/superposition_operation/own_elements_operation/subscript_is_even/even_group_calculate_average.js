'use strict';
var even_group_calculate_average = function(collection){
  var D = [];
  var even = collection.filter(item =>{return ((collection.indexOf(item)+1)%2==0 && item%2==0);});
  if(even.length==0)
    return [0];
  var A = even.filter(item =>{return Math.floor(item/10)==0;});
  var B = even.filter(item =>{return (Math.floor(item/10)!=0 && Math.floor(item/100)==0);});
  var C = even.filter(item =>{return (Math.floor(item/10)!=0 && Math.floor(item/100)!=0 && Math.floor(item/1000)==0);});
  if(A.length>0){
    var sum = 0;
    A.forEach(item =>{sum+=item;});
    D.push(Math.round(sum/A.length));
  }
  if(B.length>0){
    var sum = 0;
    B.forEach(item =>{sum+=item;});
    D.push(Math.round(sum/B.length));
  }
  if(C.length>0){
    var sum = 0;
    C.forEach(item =>{sum+=item;});
    D.push(Math.round(sum/C.length));
  }
  return D;
};
module.exports = even_group_calculate_average;
