const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: Schema.Types.ObjectId,
    product: String,
    noprice: String,
    img: String,
    city: String,
    data: String,
    high: String,
    r: String,
    guanfu: String,
    dijing: String,
    lessnum: String,
    productsum: String,
    type: Number,
    price:Number
});

mongoose.model('Product', productSchema);