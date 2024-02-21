const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  ssn: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  balance: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Account", AccountSchema);
