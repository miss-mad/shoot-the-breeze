const { User, Thought } = require("../models");

// http://localhost:3001/api/thoughts
// GET all thoughts
const getAllThoughts = (req, res) => {
  Thought.find({})
    .populate("reactions")
    .then((allThoughts) => {
      res.json(allThoughts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

// http://localhost:3001/api/thoughts/:thoughtId (636dd23784f9c2a93389316e)
// GET a single thought by its _id
const getOneThought = (req, res) => {
  Thought.findOne({ _id: req.params.thoughtId })
    // adding in associated reaction data for that one thought
    .populate("reactions")
    .then((singleThought) => {
      singleThought
        ? res.json(singleThought)
        : res.status(404).json({ message: "no thought found with that id" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

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
const createNewThought = (req, res) => {
  Thought.create(req.body)
    .then((newThought) => {
      // incl thoughtID inside the user
      console.log(req.body);
      User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: newThought._id } },
        { new: true }
      )
        // .populate("reactions")
        .then((updatedUser) => {
          console.log({ updatedUser });
          res.json(newThought);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

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
const updateThought = (req, res) => {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { ...req.body },
    { new: true }
  )
    .populate("reactions")
    .then((updatedThought) => {
      res.json(updatedThought);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// http://localhost:3001/api/thoughts/:thoughtId (636dd20884f9c2a933893165)
// DELETE to remove a thought by its _id
const deleteThought = (req, res) => {
  Thought.findOneAndRemove({ _id: req.params.thoughtId })
    .then((deletedThought) => {
      deletedThought
        ? Thought.findOneAndRemove(
            { thought: req.params.thoughtId },
            { $pull: { user: req.params.thoughtId } },
            { new: true }
          )
        : res.status(404).json({ message: "no thought found with that id" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

// http://localhost:3001/api/thoughts/:thoughtId/reactions (636dd22884f9c2a93389316b)
// POST to create a reaction stored in a single thought's reactions array field
/*
example req.body data
{
    "_id": "636dc2e13015271744224a86",
    "reactionBody": "This is me reacting!",
    "username": "ClementineTraynor"
}
*/
const createReaction = (req, res) => {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $addToSet: { reactions: req.body._id } },
    { runValidators: true, new: true }
  )
    .populate("reactions")
    .then((thoughtWhoseArrayFieldHasAnNewlyCreatedReaction) => {
      thoughtWhoseArrayFieldHasAnNewlyCreatedReaction
        ? res.json(thoughtWhoseArrayFieldHasAnNewlyCreatedReaction)
        : res.status(404).json({ message: "no thought found with that id" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

// /api/thoughts/:thoughtId/reactions/:reactionId () ()
// DELETE to pull and remove a reaction by the reaction's reactionId value
const deleteReaction = (req, res) => {
  Thought.findOneAndRemove(
    { _id: req.params.thoughtId },
    { $pull: { reactions: req.params.reactionId } }
  )
    .then((thoughtWhoseArrayFieldIsBeingDeletedFrom) => {
      thoughtWhoseArrayFieldIsBeingDeletedFrom
        ? res.json(thoughtWhoseArrayFieldIsBeingDeletedFrom)
        : res.status(404).json({ message: "no thought found with that id" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = {
  getAllThoughts,
  getOneThought,
  createNewThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
};
