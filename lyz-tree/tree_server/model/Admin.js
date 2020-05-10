const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const adminSchema = new Schema({
    userId: Schema.Types.ObjectId,
    //用户名唯一
    userName: {unique: true, type: String},
    password: String,
});

adminSchema.pre('save', function(next){
    //随机生成salt 10迭代次数
    bcrypt.genSalt(10, (err, salt)=>{
        if(err) return next(err);
        bcrypt.hash(this.password, salt, (err, hash)=>{
            if(err) return next(err);
            this.password = hash;
            next();
        });
    });
});

//验证密码的方法
adminSchema.methods = {
    comparePassword: (_password, password)=>{
        return new Promise((resolve, reject)=>{
            bcrypt.compare(_password, password, (err, isMatch)=>{
                if(!err) resolve(isMatch)
                else reject(err)
            });
        });
    }
}

//发布模型
mongoose.model('Admin', adminSchema);