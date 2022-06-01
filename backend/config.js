require('dotenv').config()

const {
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_USER,
    DATABASE_PORT,
    DATABASE_PASSWORD
} = process.env

module.exports.databaseConfig = {
    dialect:'postgres',
    host:DATABASE_HOST,
    database:DATABASE_NAME,
    username:DATABASE_USER,
    password:DATABASE_PASSWORD,
    port:DATABASE_PORT
}
