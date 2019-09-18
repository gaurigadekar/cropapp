const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema=new Schema({
    croptype:{ type: String, default:'FieldCrop ' },
    cropname: { type: String, required: true },
    weightInKg:{type:Number,required:true},

});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('FieldCrops', schema);
