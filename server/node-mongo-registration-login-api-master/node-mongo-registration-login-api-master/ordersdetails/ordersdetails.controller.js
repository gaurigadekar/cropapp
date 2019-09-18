const express = require('express');
const router = express.Router();
const orderService = require('./ordersdetails.service');

router.post('/createorder', createorder);
router.get('/', getAll);
//router.get('/:id', getById);


module.exports = router;
 
  
  function createorder(req, res, next) {
    orderService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
    }

  
    function getAll(req, res, next) {
      orderService.getAll()
          .then(users => res.json(users))
          .catch(err => next(err));
  }