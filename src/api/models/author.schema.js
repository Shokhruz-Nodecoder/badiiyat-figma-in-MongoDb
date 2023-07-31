const { Schema, model, mongoose } = require("mongoose");

const AuthorSchema = new Schema({
   
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birth: {
    type: String,
    required: true,
  },
  death: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  bio : {
    type: String,
    required: true,
  },
  admin_id: {
    type: mongoose.Types.ObjectId,
    ref: "Admins",
  },
  imageName:{
    type : String,
    required: true
},
});

module.exports = model("Author", AuthorSchema);
