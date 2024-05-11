// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUserAndStudent);
router.put('/:id', userController.updateStudent);
router.delete('/:id', userController.deleteUserAndStudent);
router.post('/login', userController.login);

module.exports = router;
