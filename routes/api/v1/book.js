const express = require("express");

const router = express.Router();

const booksApi = require("../../../controllers/bookController");

router.route("/").post(booksApi.addNewBook).get(booksApi.getAllBooks);

router
  .route("/:id")
  .get(booksApi.getBook)
  .patch(booksApi.updateBook)
  .delete(booksApi.deleteBook);

module.exports = router;
