// var newHobby = ['唱歌','摩托车','王一博'];
// var db = connect('wangyibo');
// db.user.update({name: "xiaoyou"},{$addToSet:{hobby:{$each:newHobby}}})

var modify = {
    findAndModify: 'user', //应答式更新
    query: {name: "xiaoyou"},
    update: {$set:{age:25}},
    new: true  //修改之后的结果  false修改之前的结果
};

var result = db.runCommand(modify);
printjson(result);

//查找
db.user.find(
    {age:{$gte:20,$lte:30}},  //条件大于等于20 小于等于30
    {name:true,age:true,_id:false}     //显示字段名称
)

db.user.find(
    {age:{$in:[22,28]}},  //条件 22/28的字段
    {name:true,age:true,_id:false}     
)


db.user.find(
    {$or:[{age:{$lte:20}},
    {'pc.brand':'apple'}]},  // 或关系的条件 
    {name:true,age:true,_id:false}     
)


db.user.find(
    {$and:[{age:{$lte:20}},
    {'pc.brand':'apple'}]},  // 同时满足条件 
    {name:true,age:true,_id:false}     
)

db.user.find(
    {$not:[{age:{$lte:20}},
    {'pc.brand':'apple'}]},  // 非关系的条件 
    {name:true,age:true,_id:false}     
)


//数组

db.user.find(
    {hobby:'唱歌'},
    {name:true,age:true,_id:false}   
)


db.user.find(
    {hobby:{$all:['唱歌','画画']}}, //都满足的
    {name:true,age:true,_id:false}   
)


db.user.find(
    {hobby:{$in:['唱歌','画画']}}, //有其中一个即可
    {name:true,age:true,_id:false}   
)


db.user.find(
    {hobby:{$size:3}}, //个数是3个的
    {name:true,age:true,_id:false}   
)

//分页
db.user.find(
    {},
    {name:true,age:true,_id:false}
).limit(1).skip(0).sort({age:-1})  //每次查询数据量    从第几个开始    -1为降序1为升序