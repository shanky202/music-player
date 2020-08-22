const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist')
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');


const songs = [
    {
        name: 'sanket-1',
        displayName: 'Electric Chill Machine',
        artist: 'Jacinto Design'
    },
    {
        name: 'sanket-2',
        displayName: 'Seven Nation Army (Remix)',
        artist: 'Jacinto Design'
    },
    {
        name: 'sanket-3',
        displayName: 'Goodnight, Disco Queen',
        artist: 'Jacinto Design'
    },
    {
        name: 'metric-1',
        displayName: 'Front Row (Remix)',
        artist: 'Metrix/Jacinto Design'
    }
]
// Check If Playing
let isPlaying = false;

// Play Song
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause')
    music.play();
}

// Pause Song
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play')
    music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSongs(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

// Next song
function nextSong() {
    songIndex++;
    console.log(songIndex);
    loadSongs(songs[songIndex]);
    playSong();
    if (songIndex === )
}

// Previous Song
function prevSong() {
    songIndex--;
    console.log(songIndex);
    loadSongs(songs[songIndex]);
    playSong();
}

loadSongs(songs[songIndex]);

// Event Listener
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
