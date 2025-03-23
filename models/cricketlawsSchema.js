const mongoose = require("mongoose");

const CricketLawSchema = new mongoose.Schema({
  lawNumber: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("CricketLaw", CricketLawSchema);
