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

// http://localhost:3001/api/thoughts
// GET all thoughts
router.route("/").get(getAllThoughts);

// http://localhost:3001/api/thoughts/:thoughtId (636dd23784f9c2a93389316e)
// GET a single thought by its _id
router.route("/:thoughtId").get(getOneThought);

// http://localhost:3001/api/thoughts
// POST a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
/*
example req.body data
{
  "thoughtText": "Clementine's Times...",
  "username": "ClementineTraynor",
  "userId": "<insert clementine's user id here once user's post request is complete in demo> 636e7736c414e8f18ea4dfa3"
}
*/
router.route("/").post(createNewThought);

// http://localhost:3001/api/thoughts/:thoughtId (636dd1f584f9c2a933893162)
// PUT to update a thought by its _id
/*
example req.body data
{
  "thoughtText": "Don't stop me now",
  "username": "TyroneHayward",
  "userId": "636dcdb36841c0c3631c8400"
}
*/
router.route("/:thoughtId").put(updateThought);

// http://localhost:3001/api/thoughts/:thoughtId (636dd20884f9c2a933893165)
// DELETE to remove a thought by its _id
router.route("/:thoughtId").delete(deleteThought);

// http://localhost:3001/api/thoughts/:thoughtId/reactions (636dd22884f9c2a93389316b)
// POST to create a reaction stored in a single thought's reactions array field
/*
example req.body data
{
    "reactionBody": "This is me reacting!",
    "username": "PhillippaBevan"
}
*/
router.route("/:thoughtId/reactions").post(createReaction);

// http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId
// DELETE to pull and remove a reaction by the reaction's reactionId value
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
