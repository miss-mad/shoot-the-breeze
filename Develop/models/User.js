const { Schema, model } = require("mongoose");
const { validateEmail } = require("../utils/helpers");

const userSchema = new Schema(
  {
    username: {
      /*
        String
        Unique
        Required
        Trimmed
      */
      type: String,
      unique: true,
      required: true,
      trim: true,
      maxLength: 40,
    },
    email: {
      /*
        String
        Required
        Unique
        Must match a valid email address (look into Mongoose's matching validation)
      */
      type: String,
      required: true,
      unique: true,
      // validate: validateEmail(Schema.Types.Email),
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
      trim: true,
      lowercase: true,
    },
    thoughts: [
      {
        // Array of _id values referencing the Thought model
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        // Array of _id values referencing the User model (self-reference)
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;
