const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const orderSchema = new Schema({
    ID: ObjectId,
    productId:[],
    userId: ObjectId,
    userAddress: String,
    price: Number,
    orderId: String,
    createDate: {type: Date, default: Date.now()}
});

mongoose.model('Order', orderSchema);