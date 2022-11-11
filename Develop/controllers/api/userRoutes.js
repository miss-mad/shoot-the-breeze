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

// http://localhost:3001/api/users/:userId (636db1b9a237e61c52b3fa9c)
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

// http://localhost:3001/api/users/:userId (636db1b9a237e61c52b3fa9c)
// PUT to update a user by its _id
router.route("/:userId").put(updateUser);

// http://localhost:3001/api/users/:userId (636db1b9a237e61c52b3fa9c)
// DELETE to remove user by its _id
router.route("/:userId").delete(deleteUser);

// /api/users/:userId/friends/:friendId
// POST to add a new friend to a user's friend list
router.route("/:userId/friends/:friendId").post(addFriend);

// /api/users/:userId/friends/:friendId
// DELETE to remove a friend from a user's friend list
router.route("/userId/friends/:friendsId").delete(deleteFriend);

module.exports = router;
