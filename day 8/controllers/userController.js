const User = require("../models/User");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Check existing user
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    // hash the password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreate = await User.create({ name, email, password, phone });
    // console.log("Hash:", hash_password);

    res.status(201).json({
      message: "User registered successfully",
      userCreate,
      token: await userCreate.generateToken(),
      userId: userCreate._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// login logic
const login = async function (req, res) {
  try {
    const { email, password } = req.body;
    // email valid or not
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ messege: "user not found" });
    }

    // password compare

    // const isPasswordValid = await bcrypt.compare(password, userExist.password);
    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        message: "User login successful",
        // userCreate,
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ messege: "wrong email or password" });
    }
  } catch (error) {
    console.error("Login Error:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { registerUser, login };
