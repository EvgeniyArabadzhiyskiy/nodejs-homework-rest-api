const { Schema, model } = require("mongoose");

const userSchema = Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  token: {
    type: String,
    default: null,
  },

  verify: {
    type: Boolean,
    default: false,
  },
  
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },
});

const User = model("user", userSchema);

module.exports = User;
