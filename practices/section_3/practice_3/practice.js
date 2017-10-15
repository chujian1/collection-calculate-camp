function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var arr_a = [];
  var C = [];
  collection_a.forEach(item => {
    if (!arr_a.some(item_a => {
        return item == item_a
      }))
      arr_a.push(item);
  });
  arr_a.forEach(item =>{
    var obj = {};
    obj.key = item;
    obj.count = 0;
    collection_a.forEach(item_c =>{
      if(item == item_c)
        obj.count++;
    });
    C.push(obj);
  });
  C.forEach(item =>{
    if(object_b.value.some(item_o =>{return item.key == item_o}))
      item.count-=Math.floor(item.count/3);
  });
  return C;
}

module.exports = create_updated_collection;
