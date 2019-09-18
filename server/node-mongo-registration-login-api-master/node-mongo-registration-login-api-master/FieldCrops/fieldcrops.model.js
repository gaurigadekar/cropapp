const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema=new Schema({
    var1:{type:Boolean,default:false},
    croptype:{ type: String, default:'FieldCrop ' },
    cropname: { type: String, required: true },
    weightInKg:{type:Number,default:0},
    quantity:{type:Number,default:0},
    totalwtKg:{type:Number,default:0}

});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('FieldCrops', schema);
//module.erxport=mongoose('FieldCrops',schema);

