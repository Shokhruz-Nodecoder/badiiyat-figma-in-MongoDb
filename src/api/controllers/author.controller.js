
const { v4: uuid } = require("uuid");
const path = require("path");
const authorSchema = require("../models/author.schema");

const addAuthor = async (req, res) => {
  try {
    const { image } = req.files;
    const { firstName, lastName, birth, death, country, bio, admin_id } = req.body;
    console.log(req.body)
    
    const imageName = `${uuid()}${path.extname(image.name)}`;
    console.log(imageName);

    image.mv(process.cwd() + "/uploads/" + imageName);
    
    await authorSchema.create({
      firstName,
      lastName,
      birth,
      death,
      country,
      bio,
      admin_id,
      imageName,
    });
    res.status(201).json({ message: "Created successfully" });
  } catch (error) {

    res.json({msg:error.message})
  }
};

module.exports = { addAuthor };
