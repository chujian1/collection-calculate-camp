function count_same_elements(collection) {
  //在这里写入代码
  var arr = [];
  var arr_b = [];
  collection.forEach(item =>{
    if(!arr.some(item_a =>{return item == item_a}))
      arr.push(item);
  });
  var arr_a = arr.map(item =>{return item.split("-")});
  arr_a.forEach(item =>{
    var obj = {};
    if(item.length>1){
      obj.key = item[0];
      obj.count = parseInt(item[1]);
      arr_b.push(obj);
    }
    else {
      obj.key = item[0];
      obj.count = 0;
      collection.forEach(item_c =>{
        if(item == item_c)
          obj.count++;
      });
      arr_b.push(obj);
    }
  });
  return arr_b;
}

module.exports = count_same_elements;
