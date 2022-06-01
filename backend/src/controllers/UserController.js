const { User } = require("../../database/models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const sendMessage = require("../helpers/SQS")
require('dotenv').config()
const {JWT_SECRET_KEY,MAIL_QUEUE_URL} = process.env
const UserController = {}

UserController.registerUser = async (request, response) => {
    const {
        name,
        email,
        password
    } = request.body
    try {
        let user = await User.findOne({where:{email}})

        if (user) return response.status(400).json({
            message:'Email provided already registered'
        })
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        user = await User.create({name, email, password:hashedPassword})
        
        const token = jwt.sign({id:user.id}, JWT_SECRET_KEY)
        delete user.password
        const messageData = {
            subject:'Register successful',
            email:user.email,
            html:`
            <h1>Register succesful</h1>
            <p> Welcome to email service ${user.name}, we are happy to have with us!</p>
            `
        }
        console.log(JSON.stringify(JSON.stringify(messageData)))
        await sendMessage(MAIL_QUEUE_URL, messageData) 
        return response.status(201).json({
            message: 'User created',
            data:{
                user,
                token
            }
        })
    } catch (error) {
        console.error(error)
        return response.status(500).json({
            message: error.message
        })
    }
}
UserController.loginUser = async (request, response) => {
    const {
        email,
        password
    } = request.body
    try {
        let user = await User.findOne({where:{email}})

        if (!user) return response.status(404).json({
            message:'Email provided is not registered'
        })

        console.log(user, user.password);
        const isValidPassword = await bcrypt.compare(password,user.password)

       if(!isValidPassword) return response.status(401).json({
           message:'Incorrect password'
       })
        
        const token = jwt.sign({id:user.id}, JWT_SECRET_KEY)
        delete user.password
        return response.status(201).json({
            message: 'User authenticated',
            data:{
                user,
                token
            }
        })
    } catch (error) {
        console.error(error)
        return response.status(500).json({
            message: error.message
        })
    }
}


module.exports = UserController;