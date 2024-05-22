const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => { 
  console.log('Connected to MongoDB');
});

app.get('/api/helpers', async (req, res) => {
  try {
    const helpers = await User.find({ usertype: 'helper' }).select('-password'); // Exclude password from the response
    res.json(helpers);
  } catch (error) {
    console.error('Error fetching helpers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password, dateOfBirth, username, childChecked, parentChecked, cubChecked, scoutChecked } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      dob: dateOfBirth,
      username,
      childagegroup: childChecked ? 'child' : null,
      parentrelationship: parentChecked ? 'parent' : null,
      cubChecked,
      scoutChecked,
      usertype: 'helper', // Assuming this is the default for registration
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const tokenPayload = {
      userId: user._id,
      usertype: user.usertype
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token, usertype: user.usertype });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add other route handlers...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
