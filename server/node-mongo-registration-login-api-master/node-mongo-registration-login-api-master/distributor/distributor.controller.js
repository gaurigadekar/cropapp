const express = require('express');
const router = express.Router();
const distributorService = require('./distributor.service');

router.post('/createdistributor', createdistributor);
router.get('/', getAll);
//router.get('/:id', getById);
router.get('/:daddress', getByAddress);


module.exports = router;

  
  function createdistributor(req, res, next) {
    distributorService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
    }

    function getAll(req, res, next) {
      distributorService.getAll()
          .then(distrbtrs => res.json(distrbtrs))
          .catch(err => next(err));
  }
  
  function getById(req, res, next) {
    distributorService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getByAddress(req, res, next) {
  distributorService.getByAddress(req.params.daddress)
      .then(user => user ? res.json(user) : res.sendStatus(404))
      .catch(err => next(err));
}



 