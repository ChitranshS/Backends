const jwt = require('jsonwebtoken')
const {JWT_SECRET_KEY} = require('../config')

function authMiddleware(req,res,next)
{
    const authHeader = req.headers.authorization
    if(!authHeader ||authHeader.split(' ')[0]!="Bearer" )
    {
        console.log(req.headers)
        return res.status(403).json({
            message:"Invalid request"
        });
    }
   
    try{
        const token = authHeader.split(' ')[1]

        const checkVerify = jwt.verify(token,JWT_SECRET_KEY)
        if(checkVerify.userID)
        {
            req.userID = checkVerify.userID
            next()
        }
        else
        {
            return res.status(403).json({
                message:"Invalid Signature"
            });
        }

        
    }
    catch(err)
    {
        return res.status(403).json({
            message:"Invalid Signature"
        });
    }
 
}
// authMiddleware({
//     headers:{
//         Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NjFmMTk1YTJkM2M2ZDhlZGI1ZWYxOGUiLCJpYXQiOjE3MTM4ODc0NDl9.gVN1aqhBJwKVdN3fbD5u6rw8R_KF0iuxJ7G-JGyeiYM "
//     },
// })
module.exports = {authMiddleware}