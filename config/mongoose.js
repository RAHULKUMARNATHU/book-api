const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const mongoose = require("mongoose");

let DB;

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  DB = process.env.DATABASE;
} else {
  //   DB = `mongodb://localhost:27017/brewapp`;
  DB = process.env.DATABASE_LOCAL;
}

const db = mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected successfully");
  });

module.exports = db;
