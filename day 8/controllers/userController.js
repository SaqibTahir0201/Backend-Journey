const User = require("../models/User");
// const bcrypt = require("bcryptjs");

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

    const userCreate = await User.create({ name, email, password ,phone });
    // console.log("Hash:", hash_password);

    res.status(201).json({
      message: "User registered successfully",
      userCreate,
      token: await userCreate.generateToken(),
      userId:userCreate._id.toString()
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { registerUser };
