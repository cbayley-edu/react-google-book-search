  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  
  const bookSchema = new Schema({
    authors: Array,
    description: String,
    image: String,
    link: String,
    title: String
  });
  
  const Book = mongoose.model('Book', bookSchema);
  
  module.exports = Book;