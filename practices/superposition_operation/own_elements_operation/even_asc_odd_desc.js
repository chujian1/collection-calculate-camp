'use strict';
var even_asc_odd_desc = function(collection){
  var even = collection.filter(item =>{return item%2==0;});
  var odd = collection.filter(item =>{return item%2!=0;});
  even.sort((a,b) =>{return a-b;});
  odd.sort((a,b) =>{return a-b;}).reverse();
  return even.concat(odd);
};
module.exports = even_asc_odd_desc;
