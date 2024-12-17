const mongoose = require("mongoose");

const BlacklistedTokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  expiresAt: { type: Date, required: true }, // Token expiry date
});

const BlacklistedToken = mongoose.model("BlacklistedToken", BlacklistedTokenSchema);

module.exports = BlacklistedToken;

