const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      /*
        Use Mongoose's ObjectId data type
        Default value is set to a new ObjectId
      */
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      /*
        String
        Required
        280 character maximum
      */
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      /*
        String
        Required
      */
      type: String,
      required: true,
    },
    createdAt: {
      /*
        Date
        Set default value to the current timestamp
        Use a getter method to format the timestamp on query
      */
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: {
      // Schema Settings
      // This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.
    },
  }
);

// no model created for the reactions; schema only

module.exports = reactionSchema;
