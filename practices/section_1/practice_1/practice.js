function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(item_a =>{
    return collection_b.some(item_b =>{
      return item_a == item_b;
    });
  });
}

module.exports = collect_same_elements;
