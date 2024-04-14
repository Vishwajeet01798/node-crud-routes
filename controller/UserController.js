class UserController{

    
    constructor(){
       // super()
    }
    create(req,res,next){
    res.send('user controller method : class based');
}
show (req,res,next){
    res.send('user controller method : class based');
}
}
module.exports = UserController;