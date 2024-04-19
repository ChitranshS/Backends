const token = authHeader.split(' ')[1]
const jwt = require('jsonwebtoken')
const {JWT_SECRET_KEY} = require('../config')

function authMiddleware(req,res,next)
{
    const authHeader = req.headers.Authorization
    if(!authHeader ||authHeader.split(' ')[0]!="Bearer" )
    {
        return res.status(403).json({
            message:"Invalid request"
        });
    }
   
    try{

        const checkVerify = jwt.verify(token,JWT_SECRET_KEY)
        next()

        
    }
    catch(err)
    {
        return res.status(403).json({
            message:"Invalid Signature"
        });
    }
 
}
module.exports = {authMiddleware}