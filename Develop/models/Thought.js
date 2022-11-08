const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      /*
        String
        Required
        Must be between 1 and 280 characters
      */
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      /*
        Date
        Set default value to the current timestamp
        Use a getter method to format the timestamp on query
      */
      type: Date,
      // need both methods?
      default: Date.now().getDate(),
    },
    username: {
      // (The user that created this thought)
      /*
        String
        Required
      */
      type: String,
      required: true,
    },
    reactions: [
      // (These are like replies)
      // reaction schema is used as a subdocument here
      /*
        Array of nested documents created with the reactionSchema
      */
      reactionSchema,
    ],
  },
  {
    // Schema Settings
    // Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
    toJSON: {
      virtuals: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
