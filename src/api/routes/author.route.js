const { Router } = require("express");
const { addAuthor } = require("../controllers/author.controller");
// const isAuth = require("../middlewares/isAuth");
const router = new Router();

router.post("/author", addAuthor);

module.exports = router;
