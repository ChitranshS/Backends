const express = require('express')
const { createTodo, updateTodo } = require('./types')
const { todo } = require('./db')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.post('/todo',async (req,res)=>{
 const initialPayload = req.body
 const parsedPayload = createTodo.safeParse(initialPayload)
 if (!parsedPayload.success)
 {
    res.status(403).json({
        msg:"You have sent the wrong inputs"
    })
 }
 await todo.create({
     title:initialPayload.title,
     description:initialPayload.description,
     completed:false
 })
 res.json({
     msg:"Todo created successfully" 
 })

})

app.get('/todos',async (req,res)=>{
    const todos = await todo.find()
    res.json({
        todos
    })
})

app.put('/completed',async (req,res)=>{
    const updatedPayload = req.body
    const parsedPayload = updateTodo.safeParse(updatedPayload)
    if (!parsedPayload.success)
    {
       res.status(403).json({
           msg:"You have sent the wrong inputs"
       })
    }
   await todo.update({
        _id:req.body.id
    },{
        completed :true
    })
    res.json({
        msg:"Marked Completed"
    })
})
app.listen(3000)