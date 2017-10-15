function count_same_elements(collection) {
  //在这里写入代码
  var arr_a = [];
  var arr = [];
  collection.forEach(item => {
    if (!arr_a.some(item_a => {
        return item == item_a
      }))
      arr_a.push(item);
  });
  arr_a.forEach(item =>{
    var obj = {};
    obj.key = item;
    obj.count = 0;
    collection.forEach(item_c =>{
      if(item == item_c)
        obj.count++;
    });
    arr.push(obj);
  });
  return arr;
}
module.exports = count_same_elements;
