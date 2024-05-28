const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  datetime: Date,
  image: String,
  hidden: { type: Boolean, default: false }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
