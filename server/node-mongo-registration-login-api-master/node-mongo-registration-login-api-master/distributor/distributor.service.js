const config = require('config.json');
const db = require('_helpers/db');
const Distributor = db.Distributor;


module.exports = {
    create,
    getAll,
    getById,
    getByAddress
};



async function create(distributorParam) {

    if (await Distributor.findOne({ dname: distributorParam.dname })) {
       throw 'Distributor "' + distributorParam.dname + '" is already taken';
    }

    const distrbtr = new Distributor(distributorParam);
    
    await distrbtr.save();
}

async function getAll() {
   // console.log("db call"+User.find().select('-hash') );
    return await Distributor.find();
}


async function getById(id) {
    return await Distributor.findById(id);
}

async function getByAddress(daddress){
     //return await Distributor.find({daddress:daddress1});
    // return await Distributor.findOne({daddress:daddress});
     console.log("Hi"+Distributor.find({daddress:daddress}));
}



