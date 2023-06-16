async function addArtist() {
    const artistName = document.getElementById('artist-name').value;
    const artistLocation = document.getElementById('artist-location').value;
    const artistStyle = document.getElementById('artist-style').value;
    const artistBio = document.getElementById('artist-bio').value;
  
    const artist = {
      name: artistName,
      location: artistLocation,
      style: artistStyle,
      bio: artistBio
    };
  
    const apiUrl = 'mongodb+srv://fwasil83:pFFAx4kG5oRSCmCG@cluster0.tll1tc2.mongodb.net/';
  
    try {
      const response = await axios.post(apiUrl, artist);
      if (response.status === 200) {
        alert('Artist added successfully!');
      }
    } catch (error) {
      console.error('Error adding artist:', error);
    }
    clearArtistFields();
  }
  
  function clearArtistFields() {
    document.getElementById('artist-name').value = '';
    document.getElementById('artist-location').value = '';
    document.getElementById('artist-style').value = '';
    document.getElementById('artist-bio').value = '';
  }
  