const express = require('express')
const router = express.Router()
const {User} = require('../db')
const {signupMiddleware, signinMiddleware , updateMiddleware} = require('../middleware/index')
const {authMiddleware} = require('../middleware/auth')
const jwt = require('jsonwebtoken')
const {JWT_SECRET_KEY} = require('../config')
// router.use(authMiddleware)
router.post('/signup', signupMiddleware ,async (req,res,test)=>{
 
   const user = await User.create(req.body)
   const userID = user._id

   const userIDSigned = jwt.sign({userID},JWT_SECRET_KEY)

    res.status(200).json({
        message: "User created successfully",
        token : userIDSigned
    })


})

router.post('/signin' , signinMiddleware, async(req,res)=>{
        const username = req.body.username
        const user = await User.findOne({
            username:username
        })
        if(user!=null)
        {
        const userID = user.id
        const userIDSigned = jwt.sign({userID},JWT_SECRET_KEY)

        res.status(200).json({
            token:userIDSigned
        })
    }
    else
    {
        res.status(411).json({

            message: "Error while logging in"
        })
    }
})

router.post('/',authMiddleware,updateMiddleware,async(req,res)=>{
  
  await User.updateOne({
    _id:req.userID
  },{
    $set:{
      ...req.body
  }
  })

   res.status(200).json({
    message:"Update Successful"
   })

})

router.get('/bulk',async(req,res)=>{

    const filter = req.query.filter 
    const users = await User.find({
        $or:[{
            firstName: {
                "$regex":filter
            }
        }
            ,
            
         {   lastName : {
                "$regex":filter
            }
        }]
    })

    res.json({
        user : users.map(user=>({
            username:user.username,
            firstName: user.firstName,
            lastName:user.lastName,
            _id: user._id
        }))
    })
})

module.exports = {userRouter:router}


