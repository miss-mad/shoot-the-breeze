const mongooseConnection = require("../config/connection");
const { User, Thought } = require("../models");
const {
  users,
  emails,
  thoughts,
  reactions,
  findRandomArrayItem,
  findRandomUser,
  findMultipleRandomUsers,
  findRandomThought,
  findRandomReaction,
} = require("./data");

// if there's an error connecting, tell us that error
mongooseConnection.on("error", (err) => err);

// when the connection is successful, perform these tasks (with async await so that all tasks don't get executed at the same time)
mongooseConnection.once("open", async () => {
  console.log("mongoose is connected successfully");

  // when passing in an empty document (object), it deletes all documents in a collection - this is to essentially start over with a clean slate
  await User.deleteMany({});

  await Thought.deleteMany({});

  // inserting 1 of each type - User and Thought - for seed testing
  // seeding must be done in a certain order because some schemas rely on/reference other schemas. in this case, users need to be seeded first so that the users can then have thoughts
  // await User.collection.insertOne({
  //   username: "fashe",
  //   email: "afkls@gaks.com",
  //   thoughts: findRandomThought(5),
  //   friends: findMultipleRandomUsers(5),
  // });

  const newUsersArray = [];

  for (let i = 0; i < 10; i++) {
    const userz = findMultipleRandomUsers(1);
    const emailz = findRandomArrayItem(emails);
    const thoughtz = findRandomThought(1);
    const friendz = findMultipleRandomUsers(1);

    console.log("users: ", userz);
    console.log("emails: ", emailz);
    console.log("thoughts: ", thoughtz);
    console.log("friends: ", friendz);

    console.log({ userz, emailz, thoughtz, friendz });
    newUsersArray.push({
      users: userz,
      emails: emailz,
      thoughts: thoughtz,
      friends: friendz,
    });
    console.log(newUsersArray);
    // return newUsersArray;
  }

  await User.collection.insertMany(newUsersArray);

  // await Thought.collection.insertOne({
  //   thoughtText: "sahleg",
  //   username: "jsaklgev",
  //   reactions: findRandomReaction(5),
  // });

  await Thought.collection.insertMany(thoughts);

  // await Reaction.collection.insertOne({
  //   reactionBody: findRandomReaction,
  //   username: findRandomUser,
  // });

  console.log("seeding is done");
  // process is built into node and exit is an event used to end the process currently running
  // the exit code can either be 0 or 1: 0 is for success; 1 is for failure
  process.exit(0);
});
