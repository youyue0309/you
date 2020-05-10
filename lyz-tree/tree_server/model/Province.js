const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const provinceSchema = new Schema({
    id: Schema.Types.ObjectId,
    provinceId:Number,
    provinceName: String
});

mongoose.model('Province', provinceSchema);