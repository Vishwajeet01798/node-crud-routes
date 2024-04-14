const express = require ('express');
const UserController= require ('../controller/UserController');

const router = express.Router();
const user = new UserController();

router.get('/create',function(req,res,next){
    user.create(req,res,next)
});
router.get('/show',function(req,res,next){
    user.show(req,res,next)
});

module.exports =router;