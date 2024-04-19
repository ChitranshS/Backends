const mongoose = require('mongoose')
const {CONNECTION_STRING} = require('./config')

if (!mongoose.connect(CONNECTION_STRING))
    {
        console.log("Failed to connect")
    }
    
const userSchema = mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String
})

const User = mongoose.model('User',userSchema)
module.exports = {User}