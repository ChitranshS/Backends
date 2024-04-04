const express = require('express')
const jwt = require ('jsonwebtoken')
const zod = require('zod')
jwtPassword = "1234"

const app = express()
app.use(express.json())
const emailSchema = zod.string().email()
const passwordSchema = zod.string(6)
function signJWT(email,password){
    const signature = jwt.sign({email,password},jwtPassword)
    return signature
}
app.post("/signup",(req,res)=>{
   const emailResponse = emailSchema.safeParse(req.body.email) 
   const passwordResponse = passwordSchema.safeParse(req.body.password)
   if (!emailResponse.success || !passwordResponse.success)
   {
       res.json({
           err:emailResponse.error
       })
       return
   }

   const signature = signJWT(emailResponse.data,passwordResponse.data)
   res.json({
       msg:signature
   })
   
})

app.listen(3000)