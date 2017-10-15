function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var arr = [];
  var C = [];
  collection_a.forEach(item =>{
    if(!arr.some(item_a =>{return item == item_a}))
      arr.push(item);
  });
  var arr_a = arr.map(item =>{return item.split("-")});
  arr_a.forEach(item =>{
    var obj = {};
    if(item.length>1){
      obj.key = item[0];
      obj.count = parseInt(item[1]);
      C.push(obj);
    }
    else {
      obj.key = item[0];
      obj.count = 0;
      collection_a.forEach(item_c =>{
        if(item == item_c)
          obj.count++;
      });
      C.push(obj);
    }
  });
  C.forEach(item =>{
    if(object_b.value.some(item_o =>{return item.key == item_o}))
      item.count-=Math.floor(item.count/3);
  });
  return C;
}

module.exports = create_updated_collection;
