const mongoose = require("mongoose");
const { connection } = require('./connectionString.json')

// connect to mongoDB
mongoose.connect(connection)

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todo',todoSchema)

module.exports = {
    todo
}
