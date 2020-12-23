const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

const passport = require('passport');
const auth = passport.authenticate("jwt-auth", { session: false });

router.get('/:userId', userController.getUser);
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;