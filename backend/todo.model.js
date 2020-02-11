const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const todoSchema = new Schema({
  status: String,
  text: String,
  id: Number
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;