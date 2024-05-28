const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  fileName: String,
  filePath: String,
  hidden: { type: Boolean, default: false },
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
