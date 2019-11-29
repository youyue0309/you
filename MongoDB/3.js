// var newHobby = ['唱歌','摩托车','王一博'];
// var db = connect('wangyibo');
// db.user.update({name: "xiaoyou"},{$addToSet:{hobby:{$each:newHobby}}})

var modify = {
    findAndModify: 'user',
    query: {name: "xiaoyou"},
    update: {$set:{age:25}},
    new: true
};

var result = db.runCommand(modify);
printjson(result);
