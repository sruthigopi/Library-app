const mongoose =require('mongoose');

mongoose.connect('mongodb+srv://userone:userone@cluster0.evox0ui.mongodb.net/LibraryDB?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const Schema=  mongoose.Schema;

var UserSchema= new Schema({
    useremail:String,
    userpassword:String
})
var UserData = mongoose.model('user',UserSchema);
module.exports=UserData;
