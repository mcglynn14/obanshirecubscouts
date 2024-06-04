const mongoose = require('mongoose'); // Importing mongoose for MongoDB interactions

// Defining the schema for Event model
const eventSchema = new mongoose.Schema({
  title: String, // Field for storing the title of the event
  datetime: Date, // Field for storing the datetime of the event
  image: String, // Field for storing the image associated with the event
  hidden: { type: Boolean, default: false } // Field for storing visibility status (default: false)
});

const Event = mongoose.model('Event', eventSchema); // Creating Event model from the schema

module.exports = Event; // Exporting the Event model
