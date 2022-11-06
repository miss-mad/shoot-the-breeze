const mongoose = require("mongoose");

// when is thoughtsDB created and used? here?
mongoose.connect("mongodb://127.0.0.1:27017/thoughtsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;


/*
or this way:

const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
*/