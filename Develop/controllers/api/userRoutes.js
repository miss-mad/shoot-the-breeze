const router = require("express").Router();
const {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../userController"); // inside the object, require the functions created in userController.js

// remember the "/api/users" path is already specified

// using .route() method on the express Router instead of .use() because .route() targets the specific HTTP request type we want to make (GET, POST, PUT DELETE).

// these requests are also chainable; I can chain them later to make the code cleaner

// http://localhost:3001/api/users
// GET all users
router.route("/").get(getAllUsers);

// http://localhost:3001/api/users/:userId (636ebe754284fa9a9c929b27 - TyroneHayward)
// GET a single user by its _id and populated thought and friend data
router.route("/:userId").get(getOneUser);

// http://localhost:3001/api/users
// POST a new user
/* example req.body data
{
    "username": "ClementineTraynor",
    "email": "ct@snapi.com"
}
*/
router.route("/").post(createNewUser);

// http://localhost:3001/api/users/:userId (636ebe9d4284fa9a9c929b2b - HaleyThorn)
// PUT to update a user by its _id
/*
example req.body data
{
    "username": "HaleyThorn-Webster",
    "email": "hthornwebster@gmail.com"
}
*/
router.route("/:userId").put(updateUser);

// use if deleting user by id
// http://localhost:3001/api/users/:userId (636ebe9d4284fa9a9c929b2b - HaleyThorn)
// use if deleting user by id and the user's associated thoughts
// http://localhost:3001/api/users/:userId/thoughts/:thoughtId (636ebe9d4284fa9a9c929b2b - HaleyThorn) (636ead2f11154b689ac01dfe)
// DELETE to remove user by its _id
router.route("/:userId").delete(deleteUser);

// http://localhost:3001/api/users/:userId/friends/:friendId (636ebeab4284fa9a9c929b2d - BeatriceChambers) (636ebe894284fa9a9c929b29 - PhillippaBevan) adding Beatrice to Joanne's friends list
// POST to add a new friend to a user's friend list
/*
example req.body data
{
    "_id": "636dcdea6841c0c3631c8408"
}
*/
router.route("/:userId/friends/:friendId").post(addFriend);

// http://localhost:3001/api/users/:userId/friends/:friendId (636ebeb64284fa9a9c929b2f - PhillippaBevan) (636ebe894284fa9a9c929b29 - BeatriceChambers) deleting Beatrice from Phillippa's friends list
// DELETE to remove a friend from a user's friend list
router.route("/:userId/friends/:friendId").delete(deleteFriend);

module.exports = router;
