const express = require('express')
const jwt = require('jsonwebtoken')
const jwtPassword = "123"

const app = express()
app.use(express.json())
const ALL_USERS = [
    {
        username:"Chits",
        password:"chits123",
        name : "Chits"
    }
    ,
    {
        username:"Chintu",
        password:"chintu123",
        name:"Chintu"
    }
    ,
    {
        username:"Chintan",
        password:"chintan123",
        name:"Chintan"
    }
]

app.get("/",(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    console.log(req.body)

})

app.listen(3000)