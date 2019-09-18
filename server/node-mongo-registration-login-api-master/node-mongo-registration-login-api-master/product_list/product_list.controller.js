const express = require('express');
const router = express.Router();
const productService = require('./product_list.service');

router.post('/addproduct', addproduct);
router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;


  function addproduct(req, res, next) {
    productService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
    }

    function getAll(req, res, next) {
      productService.getAll()
          .then(users => res.json(users))
          .catch(err => next(err));
  }
  
  function getById(req, res, next) {
    productService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
 }
