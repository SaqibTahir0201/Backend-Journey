const express = require("express");
const { registerUser } = require("../controllers/userController");
const { login } = require("../controllers/userController");
const router = express.Router();
const UserController = require("../controllers/userController.js");
// import UserController from "../controllers/userController.js"
const signupSchema = require("../validators/auth-validators.js");
const validate = require("../middlewares/validate-middleware");

// POST /api/users/register
// router.post("/register", registerUser);
// router.post("/login", login);
// router.post("/register", UserController.registerUser);
router
  .route("/register")
  .post(validate(signupSchema), UserController.registerUser);

router.post("/login", UserController.login);

module.exports = router;
