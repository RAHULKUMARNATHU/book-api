const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "A book must have a title"],
  },
  author: {
    type: String,
    require: [true, "A book must have an author"],
  },
  summary: {
    type: String,
  },
});

module.exports = mongoose.model("Book", bookSchema);
