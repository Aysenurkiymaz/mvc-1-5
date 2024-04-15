const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/list', (req, res) => {
  res.render('books', { books: booksController });
});

module.exports =