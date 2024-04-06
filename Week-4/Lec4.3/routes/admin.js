const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: 'Admin created successfully'
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title; 
    const description = req.body.description;
    const price = req.body.price;
   await Course.create({
        title: title,
        description: description,
        price: price
    }) 
    res.json({
        msg:"Course created successfully"
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {

   const response = await Course.find({})
    res.json({
        courses: response
    })});

module.exports = router;