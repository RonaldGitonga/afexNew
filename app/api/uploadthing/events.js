// server.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (replace 'your_mongodb_uri' with your actual MongoDB URI)
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Set up a basic event schema
const eventSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  picture: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String },
});

const Event = mongoose.model('Event', eventSchema);

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// API endpoint for creating events
app.post('/api/events', upload.single('picture'), (req, res) => {
  const { date, time, location, description } = req.body;
  const picture = req.file.filename; // Multer middleware adds the filename to req.file

  const newEvent = new Event({
    date,
    time,
    location,
    picture,
    description,
  });

  newEvent.save((err, event) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).json(event);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
