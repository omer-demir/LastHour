(function (app) {
    var mongoose=require('mongoose');
    var schema=mongoose.Schema;
    
    var userSchema=new schema({
        username:String,
        password:String,
        email:String,
        createDate:{type:Date,default:Date.now},
        active:Boolean
    },{
        collection:'Users'
    });
    
    app.user=mongoose.model('User',userSchema);
}(module.exports));