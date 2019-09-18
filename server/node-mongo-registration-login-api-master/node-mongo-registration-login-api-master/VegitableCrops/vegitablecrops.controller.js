const express = require('express');
const router = express.Router();
const vegitableproductService = require('./vegitablecrops.service');

router.post('/addVegitableproduct', addVegitableproduct);
router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;

  function addVegitableproduct(req, res, next) {
   vegitableproductService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
    }

    function getAll(req, res, next) {
        vegitableproductService.getAll()
          .then(users => res.json(users))
          .catch(err => next(err));
  }
  
  function getById(req, res, next) {
    vegitableproductService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
  } 
  