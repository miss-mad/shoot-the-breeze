const router = require("express").Router();
const {
  getAllThoughts,
  getOneThought,
  createNewThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../thoughtController"); // inside the object, require the functions created in thoughtController.js

// remember the "/api/thoughts" path is already specified

// using .route() method on the express Router instead of .use() because .route() targets the specific HTTP request type we want to make (GET, POST, PUT DELETE).

// these requests are also chainable; I can chain them later to make the code cleaner

// /api/thoughts
// GET all thoughts
router.route("/").get(getAllThoughts);

// /api/thoughts/:thoughtId
// GET a single thought by its _id
router.route("/:thoughtId").get(getOneThought);

// /api/thoughts
// POST a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
router.route("/").post(createNewThought);

// /api/thoughts/:thoughtId
// PUT to update a thought by its _id
router.route("/:thoughtId").put(updateThought);

// /api/thoughts/:thoughtId
// DELETE to remove a thought by its _id
router.route("/:thoughtId").delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field
router.route("/:thoughtId/reactions").post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
// DELETE to pull and remove a reaction by the reaction's reactionId value
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
