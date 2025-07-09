const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');
const upload = require('../middleware/multer');

router.get('/', bookController.getAllBooks);
router.get('/new', bookController.getNewBookForm);
router.post('/new-book', upload.single('image'), bookController.createBook);

router.get('/:id/edit', bookController.getEditBookForm); 
router.post('/:id/update', upload.single('image'), bookController.updateBook); 

router.post('/:id/delete', bookController.deleteBook);

module.exports = router;
