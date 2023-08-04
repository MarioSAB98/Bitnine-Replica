const express = require('express');
const router = express.Router();
const { signUp, logIn, updateUser, deleteUser } = require('../controllers/user.controller');
const { signupValidation, loginValidation } = require('../utils/authenticationSchema');
const verifyToken = require('../utils/verifyToken');

router.post('/signup', signupValidation, signUp)

router.post('/login', loginValidation, logIn)

router.patch('/:id', verifyToken, updateUser)

router.delete('/:id', verifyToken, deleteUser)

module.exports = router;