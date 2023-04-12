const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    bookName :{
        type : String,
        required: true,
    },
    bookAuthor :{
        type : String,
        required: true
    },
    bookPublication :{
        type : String,
        required: true
    },
    bookDate :{
        type : String,
        required: true
    },
    bookVersion :{
        type : String,
        required: true
    },

})

const User = mongoose.model('BOOK',userSchema);

module.exports = User;