const mongooseConnection = require("../config/connection");
const { User, Thought } = require("../models");
const { findRandomUser, findRandomThought } = require("./data");

// if there's an error connecting, tell us that error
mongooseConnection.on("error", (err) => err);

// when the connection is successful, perform these tasks (with async await so that all tasks don't get executed at the same time)
mongooseConnection.once("open", async () => {
  console.log("mongoose is connected successfully");

  // when passing in an empty document (object), it deletes all documents in a collection - this is to essentially start over with a clean slate
  await User.deleteMany({});

  await Thought.deleteMany({});

  // inserting 1 of each type - User and Thought - for seed testing
  await User.collection.insertOne({
    username: "fashe",
    email: "afkls@gaks.com",
    thoughts: [],
    friends: [],
  });

  await Thought.collection.insertOne({
    thoughtText: "sahleg",
    username: "jsaklgev",
    reactions: [],
  });

  console.log("seeding is done");
  // process is built into node and exit is an event used to end the process currently running
  // the exit code can either be 0 or 1: 0 is for success; 1 is for failure
  process.exit(0);
});
