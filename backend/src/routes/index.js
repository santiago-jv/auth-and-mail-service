
const {Router} = require('express')
const userRouter = require('./userRouter')

const router = Router()
router.use('/api',userRouter)

module.exports = router