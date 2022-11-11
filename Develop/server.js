// require and use express
const express = require("express");
const app = express();
// require mongoose connection
const db = require("./config/connection");
const routes = require("./controllers");

// require models once they're created

// PORT info
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use the routes in the controllers folder
app.use(routes);

// tell the express app to listen on our designated PORT with the open mongoose database connection
// if the connection fails for whatever reason, we don't want to listen at the PORT
// remember that db variable = mongoose.connection
db.once("open", () => {
  // now that we've connected to mongoose, listen and console.log the PORT message
  app.listen(PORT, () => {
    console.log(`Social Network API server running on http://localhost:${PORT}`);
  });
});
