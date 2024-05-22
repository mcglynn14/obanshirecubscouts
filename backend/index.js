const express = require('express'); // Express framework for building web applications
const mongoose = require('mongoose'); // MongoDB object modeling tool
const cors = require('cors'); // Cross-Origin Resource Sharing middleware
const bcrypt = require('bcryptjs'); // Library for hashing passwords
const jwt = require('jsonwebtoken'); // Library for generating and verifying JSON Web Tokens
const User = require('./models/User'); // Import User model

// Import required modules
require('dotenv').config(); // Load environment variables from a .env file
require('./models/Department'); // Import Department model

const app = express(); // Create an instance of the Express application
const PORT = process.env.PORT || 5001; // Set the port number

app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for all routes

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI; // Get the MongoDB connection URI from environment variables
// Connect to MongoDB using the URI
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Event handler for successful MongoDB connection
mongoose.connection.on('connected', () => { 
  console.log('Connected to MongoDB');
});

// Route handler for fetching user data
app.get('/api/users', async (req, res) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    // Verify the token
    jwt.verify(token, 'your-secret-key', async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
      }
      const user = await User.findById(decoded.userId).populate('usertype');

      // The decoded.userId should match the structure used in jwt.sign during login

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Return data only for the authenticated user
      const formattedUser = {
        UserID: user._id,
        username: user.username,
        password: user.password,
        email: user.email,
        usertype: user.usertype,
        name: user.name,
        phonenumber: user.phonenumber,
        dob: user.dob,
        childagegroup: user.childagegroup,
        Parentrelationship: user.parentrelationship
    };
    
    

      res.json(formattedUser);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route handler for user registration
app.post('/api/register', async (req, res) => {
    try {
      const { name, email, password, dateOfBirth, username, childChecked, parentChecked, cubChecked, scoutChecked } = req.body;
  
      // Check if the user already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        dob: dateOfBirth,
        username,
        childagegroup: childChecked ? 'child' : null,
        parentrelationship: parentChecked ? 'helper' : null,
        cubChecked,
        scoutChecked,
        weekdaysChecked,
        Evenings
      });
  
      // Save the user to the database
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// Route handler for user login
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        console.log('Received request body:', req.body);

        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        // Include userId and usertype in the token payload
        const tokenPayload = {
            userId: user._id,
            usertype: user.usertype // Assuming 'usertype' field exists in the User model
        };

        const token = jwt.sign(tokenPayload, 'your-secret-key', {
            expiresIn: '1h',
        });

        // Send token and usertype in the response
        res.json({ token, usertype: user.usertype });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



// Route handler for updating user profile
app.put('/api/updateProfile', async (req, res) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    // Verify the token
    jwt.verify(token, 'your-secret-key', async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
      }

      const { fullName, dob, profileImage } = req.body;

      // Find the user by decoded userId
      const user = await User.findById(decoded.userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Update user profile fields if provided
      if (fullName) {
        const [forename, surname] = fullName.split(' ');
        user.forename = forename;
        user.surname = surname;
      }

      if (dob) {
        user.dob = dob;
      }

      if (profileImage) {
        // Handle profile image update (if needed)
        // For example, save the image to a storage service and update the user's profileImage field
      }

      // Save the updated user
      await user.save();

      res.json({ message: 'Profile updated successfully' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
