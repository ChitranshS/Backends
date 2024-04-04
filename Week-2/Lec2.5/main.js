const express = require("express")
const app = express()
const port = 3000
user = [{
    personName : "Indian",
    kidneys : [{
        healthy : true
    }]
}]
app.use(express.json())
app.get("/",function(req,res){
    let personKidneys = user[0].kidneys
    let noOfKidneys = personKidneys.length
    let noofHealthyKidneys = 0
    for (let i=0;i<noOfKidneys;i++)
    {
        if(personKidneys[i].healthy)
        {
         noofHealthyKidneys = noofHealthyKidneys+1
        }
    }
    let noofUnhealthyKidneys = noOfKidneys-noofHealthyKidneys
    res.json({
        noOfKidneys,
        noofHealthyKidneys,
        noofUnhealthyKidneys
    })
})
app.post('/',function(req,res){
    let isHealthy = req.body.isHealthy
    user[0].kidneys.push({healthy:isHealthy})
    res.json({
        msg:"Done!"
    })
})
app.listen(3000)