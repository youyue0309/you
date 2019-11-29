var userName = "wangyibo";
var time = Date.parse(new Date());
var data = {
    "username": userName,
    "regisTime": time
};
var db = connect('wangyibo');
db.user.insert(data);
print('insert success');