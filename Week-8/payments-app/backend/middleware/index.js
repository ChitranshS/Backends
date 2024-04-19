const zod = require('zod')
const {User} = require('../db')
function signupMiddleware(req,res,next)
{
const signupSchema = zod.object({
    username:zod.string().email(),
    password:zod.string().min(5),
    firstName:zod.string().max(10),
    lastName:zod.string().max(10)
})
    const parsedRequest = signupSchema.safeParse(req.body)
    if(!parsedRequest.success)
    {
        res.status(406).json({
            message: "Incorrect inputs"
        })
        return
    }
  
     const userExists = User.findOne(
        {
            username:req.username
        }
     ).then((value)=>{ 
        
        if(value != null)
        {
           res.status(411).json({
               message: "Email already taken"
           })
           return
        }
    })
     
     
     
     next()
}



function signinMiddleware(req,res,next)
{
    const signinSchema = zod.object({
        username:zod.string().email(),
        password:zod.string()
    })

    const parsedRequest = signinSchema.safeParse(req.body)
    if(!parsedRequest.success)
    {
        res.status(411).json({

            message: "Error while logging in"
        })
        return
    }
    next()


}


module.exports = {signupMiddleware,signinMiddleware}
// signupMiddleware({
    // username:"Jk9oI@example.com",
    // password:"12345",
    // firstName:"Harkirat",
    // lastName:"Saini"
// })