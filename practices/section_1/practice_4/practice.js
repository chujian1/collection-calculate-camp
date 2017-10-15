function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var arr_a = [];
  var arr_b = [];
  collection_a.forEach(item =>{
    arr_a.push(item.key);
  });
  object_b.value.forEach(item =>{
    arr_b.push(item);
  });
  return arr_a.filter(item_a =>{
    return arr_b.some(item_b =>{
      return item_a == item_b;
    });
  });
}

module.exports = collect_same_elements;
