const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Artist = require('./models/Artist');

const app = express();
const port = process.env.PORT || 3001;

mongoose.connect('mongodb+srv://fwasil83:pFFAx4kG5oRSCmCG@cluster0.tll1tc2.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Fetch all artists
app.get('/artists', async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Fetch artists by location
app.get('/artists/location', async (req, res) => {
  const location = req.query.location;
  try {
    const artists = await Artist.find({ location: location });
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new artist
app.post('/artists', async (req, res) => {
  try {
    const artist = await Artist.create(req.body);
    res.json(artist);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});