const mongoose = require('mongoose');

const { Schema } = mongoose;

const urlSchema = Schema({
  urlCode: {
    type: String,
  },
  defaultUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model('Url', urlSchema);
