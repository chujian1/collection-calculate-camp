'use strict';
var is_exist_element = function(collection,element){
  var even = collection.filter(item =>{return (collection.indexOf(item))%2==0;});
  return even.some(item =>{return element==item;});
};
module.exports = is_exist_element;
