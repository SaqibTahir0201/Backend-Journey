
const express = require("express");
const { registerUser } = require("../controllers/userController");
const { login } = require("../controllers/userController");
const router = express.Router();

// POST /api/users/register
router.post("/register", registerUser);
router.post("/login", login);

module.exports = router;
