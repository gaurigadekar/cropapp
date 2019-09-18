const config = require('config.json');
const db = require('_helpers/db');
const VegitableCrops = db.VegitableCrops;


module.exports = {
    create,
    getAll,
    getById
};

async function create(VegitableCropsParam) {

  //  if (await Product_list.findOne({ cropname: Product_listParam.cropname })) {
      // throw 'Product_list "' + Product_listParam.cropname + '" is already taken';
    //}
    const product = new VegitableCrops(VegitableCropsParam);
   
    await product.save();
}

async function getAll() {
   // console.log("db call"+User.find().select('-hash') );
    return await VegitableCrops.find();
}

async function getById(id) {
    return await VegitableCrops.findById(id);
}