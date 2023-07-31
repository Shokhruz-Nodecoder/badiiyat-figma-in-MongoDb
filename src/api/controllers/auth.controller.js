const Admin = require("../models/admins.schema");
const bcrypt = require("bcrypt");
const jwt = require("../../libs/jwt");
const { generateHash, comparePass } = require("../../libs/bcrypt");

const login = async (req, res) => {
  console.log(req.body);
  try {
    const { username, password } = req.body;
    const findUser = await Admin.find({ username });
    console.log(findUser);
    const compare = await comparePass(password, findUser[0].password);

    if (!compare) {
      return res.status(404).json({ message: "Passwords do not match" });
    }
    const token = jwt.sign({ adminId: findUser.id });

    res.cookie("token", token);

    res.status(201).json({ message: `Welcome ${username}`, token: token });
    // res.redirect("/admin");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  console.log(req.body );
  try {
    const { username, password } = req.body;
    const generate = await generateHash(password);
    const findUser = await Admin.find({ username: username });

    const newAdmin = new Admin({ username, password: generate });

    if (findUser.length) {
      return res.status(404).json({ message: "User already existed" });
    }

    const token = jwt.sign({ adminId: findUser.id });

    res.cookie("token", token);

    await newAdmin.save();

    res.status(201).json({ message: "Admin added", data: newAdmin, token: token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  login,

  register,
};
