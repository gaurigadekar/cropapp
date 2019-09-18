const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    dname: { type: String, unique: true, required: true },
    daddress: { type: String, required: true },
    
    });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Distributor', schema);
