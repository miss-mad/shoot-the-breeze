const router = require("express").Router();
const {} = require("../userController"); // inside the object, require the functions created in userController.js

// remember the "/api/users" path is already specified

// using .route() method on the express Router instead of .use() because .route() targets the specific HTTP request type we want to make (GET, POST, PUT DELETE). these requests are also chainable; I can chain them later to make the code cleaner

// need to pass imported functions into each http request once they're made

// /api/users
// GET all users
router.route("/").get();

// /api/users/:userId
// GET a single user by its _id and populated thought and friend data
router.route("/:userId").get();

// /api/users
// POST a new user
router.route("/"),post();

// /api/users/:userId
// PUT to update a user by its _id
router.route("/:userId").put();

// /api/users/:userId
// DELETE to remove user by its _id
router.route("/:userId").delete();

// /api/users/:userId/friends/:friendId
// POST to add a new friend to a user's friend list
router.route("/:userId/friends/:friendId").post();

// /api/users/:userId/friends/:friendId
// DELETE to remove a friend from a user's friend list
router.route("/userId/friends/:friendsId").delete();

module.exports = router;
