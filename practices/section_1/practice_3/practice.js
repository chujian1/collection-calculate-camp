function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var arr = [];
  object_b.value.forEach(item =>{
    arr.push(item);
  });
  return collection_a.filter(item =>{
    return arr.some(item_a =>{
      return item == item_a;
    });
  });
}

module.exports = collect_same_elements;
