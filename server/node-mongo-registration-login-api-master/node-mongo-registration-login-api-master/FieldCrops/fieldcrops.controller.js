const express = require('express');
const router = express.Router();
const fieldcropService = require('./fieldcrops.service');


router.post('/addfieldcrop', addfieldcrop);
router.get('/', getAll);

module.exports = router;

function addfieldcrop(req, res, next) {
    fieldcropService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
    }

function getAll(req, res, next) {
        fieldcropService.getAll()
            .then(users => res.json(users))
            .catch(err => next(err));
    }