const Book = require("./../models/bookModel");
const factory = require("./handleFactory");


/*route for add new book */
exports.addNewBook = factory.createOne(Book);

/*This route is for get all books */
exports.getAllBooks = factory.getAll(Book);

/*This Route is for get book by bookId */
exports.getBook = factory.getOne(Book);

/*Route is for update book details */
exports.updateBook = factory.updateOne(Book);

/*Route for delete a book */
exports.deleteBook = factory.deleteOne(Book);
