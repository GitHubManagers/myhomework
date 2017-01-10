/**
 * Created by Administrator on 2016/12/5.
 */
//step1:定义arr数组
var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var hashObj = {};
//step2:遍历arr数组，把不重复的元素，添加到hashObj中
for (var i = 0; i < arr.length; i++) {
  if (hashObj[arr[i]]) {//已存在
    hashObj[arr[i]].count += 1;
    hashObj[arr[i]].index.push(i);
  } else {
    hashObj[arr[i]] = {'count': 1, 'index': [i]};
  }
}
var max = 0;
for (var key in hashObj) {
  if (hashObj[key].count > max) {
    max = hashObj[key].count;
  }
  console.log(key + "出现了" + hashObj[key].count + "次" + hashObj[key].index);
  if (hashObj[key].count >= max) {
    console.log("出现次数最多的为" + key + "出现了" + max + "次");
  }
}

