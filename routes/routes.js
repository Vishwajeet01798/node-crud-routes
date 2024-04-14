const express = require ('express');
const router = express.Router();
const IndexController = require('../controller/IndexController');

router.get('/',IndexController.home);

router.get('/',IndexController.contact);

router.get('/contact',(req,res,next)=>{
    res.send('Hello from contact');
});

router.get('/gallery',(req,res,next)=>{
    res.send('Hello from Gallery');
});

module.exports = router;