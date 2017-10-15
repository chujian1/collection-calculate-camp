function count_same_elements(collection) {
  //在这里写入代码
  var arr = ["ar]","a-2","b,3"];
  var a = arr.map(item =>{return item.split(/[-,]/)});
  console.log(a);
}

module.exports = count_same_elements;
