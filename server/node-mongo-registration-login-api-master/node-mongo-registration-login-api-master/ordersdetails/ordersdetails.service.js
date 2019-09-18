const config = require('config.json');
const db = require('_helpers/db');
const Ordersdtl = db.Ordersdtl;



module.exports = {
    create,
    getAll
   };


async function create(ordersParam) {

     const orders = new Ordersdtl(ordersParam);
    
    await orders.save();
}

async function getAll() {

     return await Ordersdtl.find();
 }

 
