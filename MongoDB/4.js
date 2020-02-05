//遍历数据 可对数据操作

var db = connect('wangyibo');
var userList = db.user.find();
userList.forEach(function(user){
    printjson(user);
})