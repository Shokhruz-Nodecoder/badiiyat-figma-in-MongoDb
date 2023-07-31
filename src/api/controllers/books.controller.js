const { v4: uuid } = require("uuid");
const path = require("path");
const books = require("../models/books.schema");
const authors = require("../models/author.schema"); // Import the Author schema

const createBook = async (req, res) => {
  try {
    const { image } = req.files;
    const { title, pages, year, price, country, author, description } =
      req.body;

    const imageName = `${uuid()}${path.extname(image.name)}`;
    image.mv(process.cwd() + "/uploads/" + imageName);

    let authorData = await authors.findOne({ firstName: author }).populate();
    console.log(authorData);

 
    if (!authorData) {
      return res.status(404).json({message: "no author found"})
    }

    
    const data = await books.create({
      title,
      pages,
      year,
      price,
      country,
      author: authorData,
      description,
      imageName,
    });

     console.log(data)
    res.status(200).json({ msg: "Successfully created book!", data: data });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

module.exports = { createBook };
