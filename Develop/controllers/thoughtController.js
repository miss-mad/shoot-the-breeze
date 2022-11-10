const { User, Thought } = require("../models");

// GET all thoughts
const getAllThoughts = (req, res) => {
  Thought.find()
    .then((allThoughts) => {
      res.json(allThoughts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

// GET a single thought by its _id
const getSingleThought = (req, res) => {
  Thought.findOne({ _id: req.params.thoughtId })
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

// POST a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
/*
example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
*/
const createNewThought = (req, res) => {
  Thought.create(req.body)
    .then((newThought) => {
      res.json(newThought);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

// PUT to update a thought by its _id
const updateThought = (req, res) => {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { ...req.body },
    { new: true }
  )
    .then((updatedThought) => {
      res.json(updatedThought);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

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

// POST to create a reaction stored in a single thought's reactions array field
const createReaction = (req, res) => {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $addToSet: { reactions: req.body } },
    { runValidators: true, new: true }
  )
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
  getSingleThought,
  createNewThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
};
