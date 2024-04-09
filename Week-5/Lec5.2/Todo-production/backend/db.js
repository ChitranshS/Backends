const mongoose = require("mongoose");
// connect to mongoDB
mongoose.connect("mongodb+srv://chitz:chits123@cluster0.vzraxma.mongodb.net/")

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todo',todoSchema)

module.exports = {
    todo
}