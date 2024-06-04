const mongoose = require('mongoose'); // Importing mongoose for MongoDB interactions

// Defining the schema for Image model
const ImageSchema = new mongoose.Schema({
  fileName: String, // Field for storing the file name
  filePath: String, // Field for storing the file path
  hidden: { type: Boolean, default: false }, // Field for storing visibility status (default: false)
});

const Image = mongoose.model('Image', ImageSchema); // Creating Image model from the schema

module.exports = Image; // Exporting the Image model
