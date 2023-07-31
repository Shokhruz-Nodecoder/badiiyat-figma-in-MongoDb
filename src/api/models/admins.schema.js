const { Schema, model } = require("mongoose");

const Register = new Schema(
  {
    
    username: {
      type: String,
      required: true,
      min: 3,
      unique: true,
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

module.exports = model("Admins", Register);