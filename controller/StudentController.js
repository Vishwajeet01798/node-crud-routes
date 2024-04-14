
//Factory function
const Student = {
    create: function (req,res,next){
        res.send('this is Student Controller method create');
    },
    delete: function (req,res,next){
        res.send('this is Student Controller method delete');
    },
    update: function(req,res,next){
        res.send('this is Student Controller method update');
    }
}

module.exports = Student;