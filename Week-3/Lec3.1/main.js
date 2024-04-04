const express = require('express')
const app = express()

app.get('/health-checkup',(req,res)=>{
    const userName = req.headers.username
    const password = req.headers.password
    const kidneyId = req.query.kidneyId    

    if(!(userName === "Chits" && password === "chits123"))
    {
        res.status(400).json({"msg":"Something is wrong with your inputs"})
        return
    }

    if(kidneyId != 1 && kidneyId != 2)
    {
        res.status(400).json({"msg":"Something is wrong with your inputs"})
        return
    }

    res.json({msg:"Your kidney is fine!!"})
})

app.listen(3000)