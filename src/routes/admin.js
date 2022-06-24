const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.get('/login', adminController.login);
router.post('/login', adminController.check);
module.exports = router;