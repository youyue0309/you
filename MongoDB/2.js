var user1 = {
    name: "wangyibo",
    age: 22,
    hobby: ['滑板','跳舞','摩托车'],
    pc: {
        brand: 'apple',
        price: 10000
    }
};

var user2 = {
    name: "xiaozhan",
    age: 28,
    hobby: ['唱歌','画画','坚果'],
    pc: {
        brand: 'dell',
        price: 8000
    }
};

var user3 = {
    name: "xiaoyou",
    age: 21,
    hobby: ['敲代码','唱歌','爬墙'],
};

var db = connect('wangyibo');
db.user.insert([user1,user2,user3]);
print("insert success");

db.user.update({name: 'xiaoyou'},{
    name: "xiaoyou",
    age: 18,
    hobby: ['敲代码','唱歌','爬墙'],
});

// 更新
/*
db.user.update({name:"wangyibo"},{age:15})  条件   替换内容 (完全替换整条数据)
db.user.update({name:"wangyibo"},{$set:{age:15}})  (只修改指定条件)
db.user.update({name:"wangyibo"},{$unset:{'hoddy':''}}) (删除指定数据的指定属性)
db.user.update({name:"wangyibo"},{$set:{age:15}},{upsert:true}) (有当前属性就更新属性值 找不到属性时，直接插入它)
db.user.update({},{$set:{hoddy:[]}},{multi:true}) (所有数据添加属性)  不加true只有第一条数据会加
db.user.update({name:"xiaoyou"},{$push:{hoddy:"吃鸡"}})   (给数组的属性添加新的值)
db.user.update({name:"xiaoyou"},{$addToSet:{hoddy:"吃鸡"}})   (查找是否已经存在此值，若不存在直接添加进去，存在则不变)
var newHobby = ['唱歌','摩托车','王一博'];
db.user.update({name: "xiaoyou"},{$addToSet:{hobby:{$each:newHobby}}})   (添加每一个值)
db.user.update({name:"wangyibo"},{$set:{'hobby.0':'吃饭'}})   (修改数组某一个的值)
var modify = {
    findAndModify: 'user', //应答式更新
    query: {name: "xiaoyou"},
    update: {$set:{age:25}},
    new: true  //修改之后的结果  false修改之前的结果
};

var result = db.runCommand(modify);
printjson(result);

*/
