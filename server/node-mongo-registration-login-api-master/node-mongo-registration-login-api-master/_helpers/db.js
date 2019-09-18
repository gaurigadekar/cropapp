const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Distributor: require('../distributor/distributor.model'),
    Product_list:require('../product_list/product_list.model'),
    Ordersdtl:require('../ordersdetails/ordersdetails.model'),
    FieldCrops:require('../FieldCrops/fieldcrops.model'),
    VegitableCrops:require('../VegitableCrops/vegitablecrops.model')

};
