const Auth = require('./auth.route');
const User = require("./users.route")
const Author = require("./author.route")
const Book = require("./book.route")
module.exports = [Auth,User,Author,Book];