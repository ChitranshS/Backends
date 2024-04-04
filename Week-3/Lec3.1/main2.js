const express = require('express')
const app = express()
app.use(express.json())
function userMiddleware(req,res,next)
{
    const userName = req.headers.username
    const password = req.headers.password
    if(!(userName === "Chits" && password === "chits123"))
    {
        res.status(400).json({"msg":"Something is wrong with your inputs"})
        return
    }
    next()
}
function kidneyIdMiddleware(req,res,next)
{
    const kidneyId = req.query.kidneyId    
    const random  = req.body.randomi

    if(kidneyId != 1 && kidneyId != 2)
    {
        res.status(400).json({"msg":"Something is wrong with your inputs"})
        return
    }
    next()
}
app.get('/health-checkup',userMiddleware,kidneyIdMiddleware,(req,res)=>{
    res.json({msg:"All the checks are done!!"})
})

app.use((err,req,res,next) =>{
    res.json({
        msg:`There is something wrong with ${err}`
    })
})

app.listen(3000)