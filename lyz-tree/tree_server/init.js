const mongoose = require('mongoose');
const db = 'mongodb://localhost/tree';

//引入Schema
const glob = require('glob');
const path = require('path');
exports.initSchemas = () =>{
    glob.sync(path.resolve(__dirname, './model', '*.js')).forEach(require);
}

//连接数据库
exports.connect = ()=>{
    let count = 0;
    //连接数据库
    mongoose.connect(db, {useNewUrlParser: true});
    //监听数据库连接
    mongoose.connection.on('disconnected', ()=> {
        count = count + 1;
        if(count > 3){
            console.log('mongodb is failed');
        }else{
            mongoose.connect(db);
        }
    });

    //数据库出现错误
    mongoose.connection.on('error', err=>{
        console.log(err);
        mongoose.connect(db);
    });

    //连接上
    mongoose.connection.once('open', ()=>{
        console.log('mongodb connected success');
        // console.log(count);
    });
}