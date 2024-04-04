const express = require('express')
const zod = require('zod')
const app = express()
const schema = zod.array(zod.number())
app.use(express.json());
app.get('/',(req,res)=>{

    let kidneys = req.body.kidneys
    let response = schema.safeParse(kidneys)
    if(!response.success)
    {
        res.json({
            err:response.error
        })
        return
    }
    let numberKidneys = kidneys.length
    res.json({
        msg:`You have ${numberKidneys} kidneys`
    })

})
app.listen(3000)