
const express = require("express");
const { registerUser } = require("../controllers/userController");
const { login } = require("../controllers/userController");
const router = express.Router();
const UserController = require("../controllers/userController.js")
// import UserController from "../controllers/userController.js"


// POST /api/users/register
// router.post("/register", registerUser);
// router.post("/login", login);
router.post("/register", UserController.registerUser);
router.post("/login", UserController.login);

module.exports = router;
