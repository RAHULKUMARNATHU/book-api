const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A book must have a title"],
    unique: [true, "Already created"],
  },
  author: {
    type: String,
    required: [true, "A book must have an author"],
  },
  summary: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Book", bookSchema);
