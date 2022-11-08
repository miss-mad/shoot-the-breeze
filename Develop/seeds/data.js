const mongooseConnection = require("../config/connection");
const { User, Thought } = require("../models");

mongooseConnection.on("error", (err) => err);

mongooseConnection.once("open", () => {
  console.log("mongoose is connected successfully");
});

User.deleteMany({});

Thought.deleteMany({});

const users = [];
