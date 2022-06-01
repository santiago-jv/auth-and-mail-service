const { UserSchema, User } = require("./user");


function setUpModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));


}


module.exports =  setUpModels;