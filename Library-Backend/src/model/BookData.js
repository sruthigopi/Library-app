const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/LibraryDB');

const Schema=  mongoose.Schema;

var BookSchema= new Schema({
    bookName:String,
    authorName:String,
    genre:String,
    image:String
})
var BookData = mongoose.model('books',BookSchema);
module.exports=BookData;