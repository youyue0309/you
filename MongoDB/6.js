var startTime = (new Date()).getTime();
var db = connect('wangyibo');

var result = db.tel.find({tel:"15023443722"});
result.forEach(res=>printjson(res));

var runTime = new Date().getTime() - startTime;
print('run time is' + runTime + "ms");

//建立索引 加快查询效率

//db.tel.ensureIndex({tel:1})
//db.tel.getIndexes()  获取索引
//db.tel.dropIndex({tel:1}) 删除索引