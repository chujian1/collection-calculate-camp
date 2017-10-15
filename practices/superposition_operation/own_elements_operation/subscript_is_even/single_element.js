'use strict';
var single_element = function(collection){
  var even = collection.filter(item =>{return (collection.indexOf(item)+1)%2==0;});
  console.log(even);
  var arr = [];
  var A = [];
  even.forEach(item =>{
    if(!arr.some(item_a =>{item_a==item}))
      arr.push(item);
  });
  arr.forEach(item =>{
    if((even.filter(item_e =>{return item==item_e})).length==1)
      A.push(item);
  });
  return A;
};
module.exports = single_element;
