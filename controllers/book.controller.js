const Book = require('../models/book.model');
const cloudinary = require('../config/cloudinary.config');
const fs = require('fs');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.render('books/list', { books });
  } catch (err) {
    res.status(500).send('Error fetching books');
  }
};

exports.getNewBookForm = (req, res) => {
  res.render('books/new');
};

exports.createBook = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'books'
    });

    const book = new Book({
      name: req.body.name,
      author: req.body.author,
      pages: req.body.pages,
      price: req.body.price,
      imageUrl: result.secure_url
    });

    await book.save();
    res.redirect('/books');
  } catch (err) {
    res.status(500).send('Failed to create book');
  }
};

exports.getEditBookForm = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.render('books/edit', { book });
  } catch (err) {
    res.status(500).send('Error loading edit page');
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send('Book not found');

    book.name = req.body.name;
    book.author = req.body.author;
    book.pages = req.body.pages;
    book.price = req.body.price;

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'books'
      });
      book.imageUrl = result.secure_url;
    }

    await book.save();
    res.redirect('/books');
  } catch (err) {
    res.status(500).send('Update failed');
  }
};

exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.redirect('/books');
  } catch (err) {
    res.status(500).send('Delete failed');
  }
};
