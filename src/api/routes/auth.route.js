const { Router } = require("express");
const { register, login } = require("../controllers/auth.controller");

const router = Router();


router.post("/admin/signin", login);
router.post("/admin/signup", register);

module.exports = router;