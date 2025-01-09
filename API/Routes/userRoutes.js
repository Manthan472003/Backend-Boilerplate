const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.post('/', userController.createUser);

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.delete('/:id', userController.deleteUserById);

module.exports = router;