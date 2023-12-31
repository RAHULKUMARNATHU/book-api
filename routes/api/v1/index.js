const express = require("express");

const router = express.Router();

router.use("/books", require("./book"));
router.use("/users", require("./user"));

module.exports = router;
