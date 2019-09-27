//Express and Router Initializtion
const express = require('express');
const apiRouter = express.Router();

//require files section
var userController = require('./controllers/user-controller')

//User controller
apiRouter.post('/users/authenticate', userController.authenticate);
apiRouter.post('/users/register', userController.register);
apiRouter.get('/users', userController.getAll);
apiRouter.get('/users/current', userController.getCurrent);
apiRouter.get('/users/:id', userController.getById);
apiRouter.put('/users/:id',userController.update);
apiRouter.delete('/users/:id',userController._delete);


module.exports = apiRouter;