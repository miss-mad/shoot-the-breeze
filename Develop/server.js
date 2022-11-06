// require and use express
const express = require("express");
const app = express();
// require mongoose connection
const db = require("./config/connection");

// PORT info
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// tell the express app to listen on our designated PORT with the open mongoose connection
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Social Network API server running on port ${PORT}`);
  });
});
