const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  balance: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Account", AccountSchema);
