const mongoose =require('mongoose');

mongoose.connect('mongodb+srv://userone:userone@cluster0.evox0ui.mongodb.net/LibraryDB?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });


const Schema=  mongoose.Schema;

var BookSchema= new Schema({
    bookName:String,
    authorName:String,
    genre:String,
    image:String
})
var BookData = mongoose.model('books',BookSchema);
module.exports=BookData;