const { Schema, model, mongoose } = require("mongoose");

const bookSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    pages :{
        type : Number,
        required : true
    },
    year : {
        type : Number,
        required : true
    },
    price :{
        type : Number,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    author_id : {
        type: mongoose.Types.ObjectId,
        ref: "Author",
    },
    imageName : {
        type : String,
        required : true
    }
})

module.exports = model("Books", bookSchema)