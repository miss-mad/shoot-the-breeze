const { User, Thought } = require("../models");

// http://localhost:3001/api/users
// GET all users
const getAllUsers = (req, res) => {
  User.find({})
    .populate("thoughts")
    .populate("friends")
    // cannot populate "reactions" here because reactions are not part of the User schema; instead, they are displayed when the Thought model is used
    .then((allUsers) => {
      return res.json(allUsers);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
};

// http://localhost:3001/api/users/:userId (636dcdc36841c0c3631c8402 - BeatriceChambers)
// GET a single user by its _id and populated thought and friend data
const getOneUser = (req, res) => {
  User.findOne({ _id: req.params.userId })
    // adding in associated thought data for that one user
    .populate("thoughts")
    .populate("friends")
    .then((singleUser) => {
      singleUser
        ? res.json(singleUser)
        : res.status(400).json({ message: "no user found with that id" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
};

// http://localhost:3001/api/users
// POST a new user
/* example req.body data
{
    "username": "ClementineTraynor",
    "email": "ct@snapi.com"
}
*/
const createNewUser = (req, res) => {
  User.create(req.body)
    .then((newUser) => {
      res.json(newUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// http://localhost:3001/api/users/:userId (636dcdcf6841c0c3631c8404 - HaleyThorn)
// PUT to update a user by its _id
/*
example req.body data
{
    "username": "HaleyThorn",
    "email": "thorn@gmail.com"
}
*/
const updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { ...req.body },
    { new: true }
  )
    .populate("thoughts")
    .populate("friends")
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// http://localhost:3001/api/users/:userId (636dcdde6841c0c3631c8406 - Joanne Roth)
// DELETE to remove user by its _id
// BONUS: Remove a user's associated thoughts when deleted
const deleteUser = (req, res) => {
  User.findOneAndRemove({ _id: req.params.userId })
    .then((deletedUser) => {
      deletedUser
        ? Thought.findOneAndRemove(
            { user: req.params.userId },
            { $pull: { user: req.params.userId } },
            { new: true }
          )
        : res.status(404).json({ message: "no user found with that id" });
    })
    .then((associatedThoughts) => {
      associatedThoughts
        ? res.json({ message: "associated thoughts were also deleted" })
        : res.status(404).json({
            message: "user deleted, but no associated thoughts were deleted",
          });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

// http://localhost:3001/api/users/:userId/friends/:friendId (636dcdc36841c0c3631c8402 - BeatriceChambers) (636dcdea6841c0c3631c8408 - PhillippaBevan) adding Phillippa to Beatrice's friends list
// POST to add a new friend to a user's friend list
/*
example req.body data
{
    "_id": "636dcdea6841c0c3631c8408"
}
*/
const addFriend = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $addToSet: { friends: req.body._id } },
    { runValidators: true, new: true }
  )
    .populate("thoughts")
    .populate("friends")
    .then((userWhoseFriendListIsBeingAddedTo) => {
      userWhoseFriendListIsBeingAddedTo
        ? res.json(userWhoseFriendListIsBeingAddedTo)
        : res.status(404).json({ message: "no user found with that id" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

// http://localhost:3001/api/users/:userId/friends/:friendId (636dcdc36841c0c3631c8402 - BeatriceChambers) (636dcdea6841c0c3631c8408 - PhillippaBevan) deleting Phillippa from Beatrice's friends list
// DELETE to remove a friend from a user's friend list
const deleteFriend = (req, res) => {
  // User.find({ _id: req.params.userId })
  //   .then((deletedFriend) => {
  //     deletedFriend
  //       ? User.findOneAndUpdate(
  //           { id: req.params.userId },
  //           { $pull: { friends: req.params.friendId } },
  //           { new: true }
  //         )
  //       : res.status(404).json({ message: "no friend found with that id" });
  //   })

  console.log(req.params.userId);
  console.log(req.params.friendId);
  User.findOneAndUpdate(
    { _id: req.params.userId },
    {
      $pull: {
        friends: { $in: [req.params.friendId] },
      },
    },
    { new: true }
  )
    .then((userWhoseFriendListIsBeingDeletedFrom) => {
      // console.log(userWhoseFriendListIsBeingDeletedFrom);
      userWhoseFriendListIsBeingDeletedFrom
        ? res.json(userWhoseFriendListIsBeingDeletedFrom)
        : res.status(404).json({ message: "no user found with that id" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
};
