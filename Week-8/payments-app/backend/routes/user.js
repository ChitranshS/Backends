const express = require('express')
const router = express.Router()
const {User} = require('../db')
const {signupMiddleware, signinMiddleware, authMiddleware} = require('../middleware/index')
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

module.exports = {userRouter:router}


