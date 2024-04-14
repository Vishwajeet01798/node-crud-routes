function home(req,res,next){
    res.send('This is home method of IndexController');
}

const contact =(req,res,next)=>{
    res.send('This is contact method of IndexController');
}

module.exports = {
    home: home,
    contact:contact,
}