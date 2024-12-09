//Dependencies
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');

//Configuration /Middleware
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));

// Controllers
// const booksController = require('./controllers/books_controller');
// app.use('/api/books', booksController);

// LISTEN
//const PORT = process.env.PORT || 5001;
app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
})

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// })
