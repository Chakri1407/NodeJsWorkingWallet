const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', userController.signUp);
router.get('/login', userController.login);


// router.route('/').get(userController.getAllUsers).post(userController.createUser);
// router.route('/:id').get(user2Controller.getUser).patch(user2Controller.updateUser).delete(user2Controller.deleteUser);
module.exports = router;