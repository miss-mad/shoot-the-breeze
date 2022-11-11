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

// http://localhost:3001/api/thoughts/:thoughtId (636ec787d681a8c5c2217fec) (PhillippaBevan's thought)
// GET a single thought by its _id
router.route("/:thoughtId").get(getOneThought);

// http://localhost:3001/api/thoughts
// POST a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
/*
example req.body data
{
  "thoughtText": "Clementine's Times...",
  "username": "ClementineTraynor",
  "userId": "<insert clementine's user id here once user's post request is complete in demo>"
}
*/
router.route("/").post(createNewThought);

// http://localhost:3001/api/thoughts/:thoughtId (636ec747d681a8c5c2217fe1)
// PUT to update a thought by its _id
/*
example req.body data
{
"thoughtText": "Don't stop me now - by Queen",
"username": "BeatriceChambers",
"userId": "636ebe894284fa9a9c929b29"
}
*/
router.route("/:thoughtId").put(updateThought);

// http://localhost:3001/api/thoughts/:thoughtId (636ec766d681a8c5c2217fe5) (HaleyThorn's thought)
// DELETE to remove a thought by its _id
router.route("/:thoughtId").delete(deleteThought);

// http://localhost:3001/api/thoughts/:thoughtId/reactions (636ec725d681a8c5c2217fda) (TyroneHayward's thought)
// POST to create a reaction stored in a single thought's reactions array field
/*
example req.body data
{
    "reactionBody": "This is me reacting!",
    "username": "PhillippaBevan"
}
*/
router.route("/:thoughtId/reactions").post(createReaction);

// http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId (636ec725d681a8c5c2217fda) (636ec9ded681a8c5c2217fff) (Deleting BeatriceChambers' reaction from TyroneHayward's thought)
// DELETE to pull and remove a reaction by the reaction's reactionId value
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
