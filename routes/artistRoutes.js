const express = require('express');
const cors = require('cors');
const router = express.Router();
const Artist = require('../models/Artist');

router.use(cors());

// Route to fetch all artists
router.get('/', async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch all artists by location
router.get('/location/:location', async (req, res) => {
  const location = req.params.location;
  try {
    const artists = await Artist.find({ location: location });
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to create a new artist
router.post('/', async (req, res) => {
  try {
    const artist = await Artist.create(req.body);
    res.json(artist);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
