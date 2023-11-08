const express = require("express");
const authController = require("../../../controllers/authController");

const router = express.Router();

const booksApi = require("../../../controllers/bookController");

router
  .route("/")
  .post(authController.protect, booksApi.addNewBook)
  .get(booksApi.getAllBooks);

router.use(authController.protect);
router
  .route("/:id")
  .get(booksApi.getBook)
  .patch(booksApi.updateBook)
  .delete(booksApi.deleteBook);

module.exports = router;
