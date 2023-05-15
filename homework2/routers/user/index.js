const express = require('express');
const router = express.Router();
const userController = require('./user.controller')

router.get('/join',userController.join)
router.post('/join_success', userController.join_success);

module.exports=router;
