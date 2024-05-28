const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const fs = require('fs');
const User = require('./models/User');
const Event = require('./models/Event');
const Image = require('./models/Image');
require('dotenv').config();
require('./models/Department');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors({
  origin: true,
  credentials: true,
}));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log(`Created ${uploadDir} directory`);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Route to upload an image
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const newImage = new Image({
      fileName: req.file.originalname,
      filePath: req.file.path,
    });

    await newImage.save();
    res.status(201).json({ message: 'File uploaded successfully', data: newImage });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading file', error: error.message });
  }
});

// Route to fetch all images for management purposes
app.get('/api/images/manage', async (req, res) => {
  try {
    const images = await Image.find();
    console.log('Images:', images); // Log images
    res.status(200).json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ message: 'Error fetching images', error: error.message });
  }
});


// Route to delete an image
app.delete('/api/images/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.findByIdAndDelete(id);
    if (image) {
      fs.unlinkSync(image.filePath);
    }
    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting image', error: error.message });
  }
});

// Route to toggle the visibility of an image
app.patch('/api/images/:id/toggle-hide', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (image) {
      image.hidden = !image.hidden;
      await image.save();
      res.status(200).json({ message: 'Image visibility toggled successfully' });
    } else {
      res.status(404).json({ message: 'Image not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error toggling image visibility', error: error.message });
  }
});

// Update the route to fetch images
app.get('/gallery', async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching images', error: error.message });
  }
});

app.get('/api/gallery/manage', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete an event
app.delete('/api/gallery/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Toggle event visibility
app.patch('/api/gallery/:id/toggle-hide', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    event.hidden = !event.hidden;
    await event.save();
    res.status(200).json({ message: 'Event visibility toggled successfully' });
  } catch (error) {
    console.error('Error toggling event visibility:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// User registration route
app.post('/api/register', async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      dateOfBirth,
      username,
      phoneNumber,
      childChecked,
      cubChecked,
      scoutChecked,
      helperChecked
    } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userType = [
      childChecked ? 'child' : '',
      helperChecked ? 'helper' : ''
    ].filter(Boolean);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      dob: dateOfBirth,
      username,
      phoneNumber,
      userType,
      cubChecked,
      scoutChecked
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// User login route
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const tokenPayload = {
      userId: user._id,
      usertype: user.usertype
    };

    const token = jwt.sign(tokenPayload, 'your-secret-key', {
      expiresIn: '1h',
    });

    res.json({ token, usertype: user.usertype });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Fetch users
app.get('/api/users', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    jwt.verify(token, 'your-secret-key', async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
      }
      const user = await User.findById(decoded.userId).populate('usertype');

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

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

// Fetch helpers
app.get('/api/gethelpers', async (req, res) => {
  try {
    const helpers = await User.find({ usertype: 'Helper' });
    res.json(helpers);
  } catch (err) {
    console.error('Error fetching helpers:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fetch cub scouts
app.get('/api/getcubscouts', async (req, res) => {
  try {
    const child = await User.find({ usertype: 'child' });
    res.json(child);
  } catch (err) {
    console.error('Error fetching helpers:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fetch visible events
app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find({ hidden: false });
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fetch all events for management purposes
app.get('/api/events/manage', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete an event
app.delete('/api/events/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Toggle event visibility
app.patch('/api/events/:id/toggle-hide', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    event.hidden = !event.hidden;
    await event.save();
    res.status(200).json({ message: 'Event visibility toggled successfully' });
  } catch (error) {
    console.error('Error toggling event visibility:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
