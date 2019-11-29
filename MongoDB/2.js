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
