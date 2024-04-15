const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/list', (req, res) => {
  res.render('books', { books: booksController.getBooks() });
});

router.get('/add', (req, res) => {
  res.render('add-book');
});

router.post('/add', (req, res) => {
  const { title, publishingYear, authorId } = req.body;
  booksController.addBook(title, publishingYear, authorId);
  res.redirect('/book/list');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const book = booksController.getBookById(id);
  res.render('book', { book });
});

router.post('/delete/:id', (req, res) => {
  const { id } = req.params;
  booksController.deleteBook(id);
  res.redirect('/book/list');
});

module.exports = router;