const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRouter = require('./router/todoRouter');

require('dotenv').config();

const app = express();

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})


app.use('/', todoRouter);

app.listen(3001);