const { Schema, model } = require("mongoose");

const Register = new Schema(
  {
    
    firstName: {
      type: String,
      required: true,
      min: 3,
      unique: true,
    },
    lastName: {
      type: String,
      required: true,
      min: 3,
      unique: true,
    },
    phone :{
    type : String,
    required:true,
    },
    email : {
     type : String,
     required: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    
  },
  {
    timestamps: true,
  }
);

module.exports = model("Users", Register);