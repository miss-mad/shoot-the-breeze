const { User, Thought } = require("../models");

// GET all users
const getAllUsers = (req, res) => {
  User.find()
    .then((allUsers) => {
      return res.json(allUsers);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
};

// GET a single user by its _id and populated thought and friend data
const getSingleUser = (req, res) => {
  User.findOne({ _id: req.params.userId })
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

// POST a new user
/* example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
*/
const createNewUser = (req, res) => {
  // insert or create?
  User.create(req.body)
    .then((newUser) => {
      res.json(newUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// PUT to update a user by its _id
const updateUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.userId }, {}, { new: true })
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

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

// POST to add a new friend to a user's friend list
const addFriend = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $addToSet: { friends: req.body } },
    { runValidators: true, new: true }
  )
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

// DELETE to remove a friend from a user's friend list
const deleteFriend = (req, res) => {
  User.findOneAndRemove(
    { _id: req.params.userId },
    { $pull: { friends: req.params.friendId } },
    { runValidators: true, new: true }
  )
    .then((userWhoseFriendListIsBeingDeletedFrom) => {
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
  getSingleUser,
  createNewUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
};
