const {Router} = require('express')
const UserController = require('../controllers/UserController')
const userRouter = Router()

userRouter.post('/register', UserController.registerUser)
userRouter.post('/login', UserController.loginUser)

module.exports = userRouter