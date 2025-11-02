const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// secure the password with bcrypt
// databse mai save kernai sai pehle yai chle

userSchema.pre("save", async function (next) {
  //   console.log(this);
  const user = this;

  if (!user.isModified("password")) {
    next();
  }

  try {
    const hash_password = await bcrypt.hash(user.password, 10);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("User", userSchema);
