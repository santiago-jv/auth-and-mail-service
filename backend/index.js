const  express = require( 'express')
const  {config} = require( 'dotenv')
const  cors = require( 'cors')
config()
const router = require('./src/routes')
require('./database/connection')
const server = express();

const port = process.env.PORT || 8000 

server.use(cors())
server.use(express.json())
server.use(router)

server.listen(port,()=> {
    console.log("Server running",port)
})