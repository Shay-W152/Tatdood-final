document.getElementById('search-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission
  const searchLocation = document.getElementById('search-location').value;
  fetchArtistLocation(searchLocation);
});

document.getElementById('reset-button').addEventListener('click', function () {
  resetSearchResults();
});

function fetchArtistLocation(location) {
  const apiUrl = `http://localhost:3001/artists/location?location=${location}`;
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const artistList = document.getElementById('artist-list');
      artistList.innerHTML = ''; // Clear previous results

      if (data.length > 0) {
        data.forEach((artist) => {
          const carouselSlide = document.createElement('div');
          carouselSlide.classList.add('carousel-slide');
          const artistDetails = document.createElement('div');
          artistDetails.classList.add('artist-details');
          artistDetails.innerHTML = `
            <h3>${artist.name}</h3>
            <p>${artist.bio}</p>
            <img src="${artist.image}" alt="Artist Image" class="artist-img">
            <button class="carousel-prev">Previous</button>
            <button class="carousel-next">Next</button>
            <ul class="carousel-pieces">
              ${artist.pieces.map(piece => `<li><img src="${piece}" alt="Piece Image"></li>`).join('')}
            </ul>
          `;
          carouselSlide.appendChild(artistDetails);
          artistList.appendChild(carouselSlide);
        });

        // Initialize the carousel after adding slides
        initializeCarousel();

        document.getElementById('search-results').style.display = 'block';
        document.getElementById('reset-button').style.display = 'block';
      } else {
        artistList.innerHTML = '<li>No artists found.</li>';
        document.getElementById('search-results').style.display = 'none';
        document.getElementById('reset-button').style.display = 'none';
      }
    })
    .catch((error) => {
      console.error('Error fetching artists:', error);
    });
}

function resetSearchResults() {
  const artistList = document.getElementById('artist-list');
  artistList.innerHTML = '';
  document.getElementById('search-results').style.display = 'none';
  document.getElementById('reset-button').style.display = 'none';
  // Reset the carousel
  resetCarousel();
}

function initializeCarousel() {
  const carouselSlides = document.querySelectorAll('.carousel-slide');
  carouselSlides.forEach((slide) => {
    const carouselPieces = slide.querySelector('.carousel-pieces');
    const carouselPrev = slide.querySelector('.carousel-prev');
    const carouselNext = slide.querySelector('.carousel-next');
    let currentPiece = 0;

    function showPiece(index) {
      const pieces = carouselPieces.querySelectorAll('li');
      pieces.forEach((piece) => {
        piece.style.display = 'none';
      });
      pieces[index].style.display = 'block';
    }

    function nextPiece() {
      currentPiece++;
      if (currentPiece >= carouselPieces.children.length) {
        currentPiece = 0;
      }
      showPiece(currentPiece);
    }

    function previousPiece() {
      currentPiece--;
      if (currentPiece < 0) {
        currentPiece = carouselPieces.children.length - 1;
      }
      showPiece(currentPiece);
    }

    // Show the initial piece
    showPiece(currentPiece);

    carouselPrev.addEventListener('click', previousPiece);
    carouselNext.addEventListener('click', nextPiece);
  });
}

function resetCarousel() {
  // Hide all carousel slides and reset piece indexes
  const carouselSlides = document.querySelectorAll('.carousel-slide');
  carouselSlides.forEach((slide) => {
    const carouselPieces = slide.querySelector('.carousel-pieces');
    const pieces = carouselPieces.querySelectorAll('li');
    pieces.forEach((piece) => {
      piece.style.display = 'none';
    });
    currentPiece = 0;
  });
}

document.getElementById('reset-button').addEventListener('click', function () {
  document.getElementById('search-location').value = '';
  clearSearchResults();
});

function clearSearchResults() {
  const artistList = document.getElementById('artist-list');
  artistList.innerHTML = '';
  document.getElementById('search-results').style.display = 'none';
}
