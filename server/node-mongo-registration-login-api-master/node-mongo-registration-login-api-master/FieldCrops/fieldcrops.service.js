const config = require('config.json');
const db = require('_helpers/db');
const FieldCrops = db.FieldCrops;

module.exports = {
    create,
    getAll
}

async function create(FieldCropsParam) {

    //  if (await FieldCrops.findOne({ cropname: FieldCropsParam.cropname })) {
        // throw 'FieldCrops "' + FieldCropsParam.cropname + '" is already taken';
      //}
      const fieldcrp = new FieldCrops(FieldCropsParam);
     
      await fieldcrp.save();
  }
  
  async function getAll() {
         return await FieldCrops.find();
 }