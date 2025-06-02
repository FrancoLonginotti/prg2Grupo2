var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController');
router.get('/login', usersController.login);
router.post('/login', usersController.processLogin);
router.get('/logout', usersController.logout);

router.get('/profile', usersController.profile);
router.post('/profile', usersController.profile);
router.get('/profile/:id', usersController.profilePorId);

router.get('/register', usersController.register);
router.post('/register', usersController.processRegister);



module.exports = router;
