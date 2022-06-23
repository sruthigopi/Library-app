const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/LibraryDB');

const Schema=  mongoose.Schema;

var UserSchema= new Schema({
    useremail:String,
    userpassword:String
})
var UserData = mongoose.model('user',UserSchema);
module.exports=UserData;
