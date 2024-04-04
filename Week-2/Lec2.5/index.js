const express = require("express")
const port = 3000;
const app = express()
function square(n)
{
    return n*n;
}
app.get('/',function(req,res){
    let n = req.query.n
    res.send(`${square(n)}`)
})
app.listen(port);