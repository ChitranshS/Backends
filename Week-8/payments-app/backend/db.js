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

const accountSchema = mongoose.Schema({
    userId : {
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref : 'User'
    },
    balance : {
        type:Number,
        required: true
    }
})

const User = mongoose.model('User',userSchema)
const Account = mongoose.model('Accounts',accountSchema)
module.exports = {User, Account}