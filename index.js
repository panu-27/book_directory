const express = require('express');
const path = require('path');

const connectToDB = require('./db/connectToDB')
const Book = require('./models/book.model');
const bookRoutes = require('./routes/book.route');


const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000;
app.listen(PORT, async() => {
    await connectToDB();
  console.log(`Server running on http://localhost:${PORT}`);
});


app.use('/books', bookRoutes);
app.get('/', (req, res) => res.redirect('/books'));

