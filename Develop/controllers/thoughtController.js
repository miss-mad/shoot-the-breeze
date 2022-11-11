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

// http://localhost:3001/api/thoughts/:thoughtId (636ec787d681a8c5c2217fec) (PhillippaBevan's thought)
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

// http://localhost:3001/api/thoughts/:thoughtId (636ec766d681a8c5c2217fe5) (HaleyThorn's thought)
// DELETE to remove a thought by its _id
const deleteThought = (req, res) => {
  Thought.findOneAndRemove({ _id: req.params.thoughtId })
    .then((deletedThought) => {
      deletedThought
        ? Thought.findOneAndRemove(
            { _id: req.params.thoughtId },
            { $pull: { user: req.params.thoughtId } },
            { new: true }
          )
        : res.status(404).json({ message: "no thought found with that id" });
    })
    // .then(res.status(200).json({message: "thought successfully deleted"}))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

// http://localhost:3001/api/thoughts/:thoughtId/reactions (636ec725d681a8c5c2217fda) (TyroneHayward's thought)
// POST to create a reaction stored in a single thought's reactions array field
/*
example req.body data
{
    "reactionBody": "This is me reacting!",
    "username": "PhillippaBevan"
}
*/
const createReaction = (req, res) => {
  // console.log(Thought.populated("reactions"));
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $addToSet: { reactions: { ...req.body } } },
    { runValidators: true, new: true }
  )
    .populate("reactions")
    // .populate({
    //   path: "reactions",
    //   populate: { path: "thoughts", model: "Thought" },
    // })
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
// console.log(Thought.populated("reactions"));

// http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId (636ec725d681a8c5c2217fda) (636ec9ded681a8c5c2217fff) (Deleting BeatriceChambers' reaction from TyroneHayward's thought)
// DELETE to pull and remove a reaction by the reaction's reactionId value
const deleteReaction = (req, res) => {
  console.log("test");
  console.log(req.params.thoughtId);
  console.log(req.params.reactionId);
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    {
      $pull: {
        reactions: { reactionId: req.params.reactionId },
      },
    },
    { new: true }
  )
    .then((thoughtWhoseArrayFieldIsBeingDeletedFrom) => {
      thoughtWhoseArrayFieldIsBeingDeletedFrom
        ? res.json(thoughtWhoseArrayFieldIsBeingDeletedFrom)
        : res.status(404).json({ message: "no thought found with that id" });
    })
    // .then(res.status(200).json({message: "reaction successfully deleted from that thought"}))
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
