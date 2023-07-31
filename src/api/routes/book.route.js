const {Router} = require("express")
const { createBook } = require("../controllers/books.controller")
const router = new Router

router.post("/book", createBook)


module.exports = router