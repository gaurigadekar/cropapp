const config = require('config.json');
const db = require('_helpers/db');
const Product_list = db.Product_list;


module.exports = {
    create,
    getAll,
    getById
};

async function create(Product_listParam) {

  //  if (await Product_list.findOne({ cropname: Product_listParam.cropname })) {
      // throw 'Product_list "' + Product_listParam.cropname + '" is already taken';
    //}
    const product = new Product_list(Product_listParam);
       await product.save();
}

async function getAll() {
   // console.log("db call"+User.find().select('-hash') );
    return await Product_list.find();
}

async function getById(id) {
    return await Product_list.findById(id);
}

