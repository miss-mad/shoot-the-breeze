const mongoose = require("mongoose");

// when is thoughtsDB created and used? here?
mongoose.connect("mongodb://127.0.0.1:27017/thoughtsDB",
// these options prevent warnings that we would get from mongodb otherwise
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
