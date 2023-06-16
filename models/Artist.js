const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: String,
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    
  },
  style: [String],
  rating: {
    type: Number,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
  pieces: [String],
  email: String,
});

module.exports = mongoose.model('Artist', artistSchema);
