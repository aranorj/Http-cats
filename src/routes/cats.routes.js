var express = require('express');
const catController = require('../controllers/catController');
var router = express.Router();

router.get('/', catController.index);

router.get('/:id', catController.getOne);

module.exports = router;
