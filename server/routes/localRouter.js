const localRouter = require('express').Router();
const { verifyUser, saveUser } = require('../controllers/userController');

localRouter.post('/signup', saveUser, (req, res) => {
  
});

localRouter.post('/login', saveUser, (req, res) => {
  
});

module.exports = localRouter;