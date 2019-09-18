const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const schema=new Schema({
    
  //  distributorname:{type:String},
  //  croptype:{type:String},
    cropname:{type:String},
    totalweight50kg:{type:Number},
    totalweight20kg:{type:Number},
    totalweight10kg:{type:Number},
    totalweight5kg:{type:Number},
    totalweight1kg:{type:Number},
    GrandTotalQuantity:{type:Number}
    
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Ordersdtl', schema);

