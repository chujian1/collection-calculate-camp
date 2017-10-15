function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var arr = [];
  collection_b.forEach(item =>{
    if(item.length>=1){
      item.forEach(item_a =>{
        arr.push(item_a);
      });
    }
    else
      arr.push(item);
  });
  return collection_a.filter(item =>{
    return arr.some(item_a =>{
      return item == item_a;
    });
  });
}

module.exports = collect_same_elements;
