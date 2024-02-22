const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// the reaction given to a thought.
const reactionSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
  },
  creationTime: {
    type: Date,
    default: Date.now,
  },
});
// the thoughts, or the content of the post.
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 250,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;