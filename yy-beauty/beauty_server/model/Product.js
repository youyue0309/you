const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: Schema.Types.ObjectId,
    chname:String,
    img: String,
    Enname: String,
    type: Number,
    price:String,
    color: String,
    ml: String
});

mongoose.model('Product', productSchema);