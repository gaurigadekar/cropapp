const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    croptype: { type: String,  required: true },
    cropname: { type: String, required: true },
    weightInKg:{type:Number,required:true,default:0},
   // GrandTotal:{type:Number,required:true,default:0}
    });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Product_list', schema);
