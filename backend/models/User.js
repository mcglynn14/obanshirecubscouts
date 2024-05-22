const mongoose = require('mongoose');

// Import the mongoose library

// Define the user schema
const userSchema = new mongoose.Schema({
    email: String, // User's email address
    password: String, // User's password
    forename: String, // User's first name
    surname: String, // User's last name
    username: String,
    childagegroup: String,
    parentrelationship: String,
    usertype: String,
    phonenumber: String, 
    dob: Date, // User's date of birth
});

// Create the User model using the user schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;