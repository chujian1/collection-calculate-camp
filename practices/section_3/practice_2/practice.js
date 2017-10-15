function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  collection_a.forEach(item =>{
    if(object_b.value.some(item_o =>{return item.key == item_o}))
      item.count-=Math.floor(item.count/3);
  });
  return collection_a;
}

module.exports = create_updated_collection;
