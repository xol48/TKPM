const express = require('express');
const router = express.Router();

const mainController = require('../app/controllers/MainController');

router.get('/', mainController.show);

module.exports = router;