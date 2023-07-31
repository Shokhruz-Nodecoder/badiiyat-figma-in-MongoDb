const { v4: uuid } = require("uuid");
const path = require("path");
const books = require("../models/books.schema");

const createBook = async (req, res) => {
  try {
    const { image } = req.files;
    const {
      title,
      pages,
      year,
      price,
      country,
      author,
      description,
      author_id,
    } = req.body;
    console.log(req.body);
    const imageName = `${uuid()}${path.extname(image.name)}`;
    console.log(imageName);

    image.mv(process.cwd() + "/uploads/" + imageName);

    await books.create({
      title,
      pages,
      year,
      price,
      country,
      author,
      description,
      author_id,
      imageName,
    });

    res.status(200).json({ msg: "Successfully created book!" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

module.exports = { createBook };
