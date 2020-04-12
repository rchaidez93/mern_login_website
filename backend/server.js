const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');

server.use('/users', usersRouter);

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});