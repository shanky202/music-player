const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist')
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEle = document.getElementById('current-time');
const durationEle = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');


const songs = [
    {
        name: 'sanket-1',
        displayName: 'Electric Chill Machine',
        artist: 'Jacinto'
    },
    {
        name: 'sanket-2',
        displayName: 'Seven Nation Army (Remix)',
        artist: 'Jacinto'
    },
    {
        name: 'sanket-3',
        displayName: 'Goodnight, Disco Queen',
        artist: 'Jacinto'
    },
    {
        name: 'metric-1',
        displayName: 'Front Row (Remix)',
        artist: 'Metrix/Jacinto'
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
    if (songIndex > songs.length-1) {
        songIndex = 0;
    }
    loadSongs(songs[songIndex]);
    playSong();
}

// Previous Song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length-1;
    }
    loadSongs(songs[songIndex]);
    playSong();
}

loadSongs(songs[songIndex]);

// Update Progress Bar and Time
function updateProgressBar(e) {
    if (isPlaying) {
        const { duration, currentTime } = e.srcElement;
        // Update progress bar width
        const progressPercent = ( currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`
        //  Calculate display for duration
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`
        }
        // Delay Switching Duration Element to Avoid NaN
        if (durationSeconds) {
            durationEle.innerText = `${durationMinutes}:${durationSeconds}`;
        } 
        //  Calculate display for current
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10) {
            currentSeconds = `0${currentSeconds}`
        }
        currentTimeEle.textContent = `${currentMinutes}:${currentSeconds}`
    }
}

// Set Progress Bar
function setProgressBar(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const { duration } = music;
    music.currentTime = (clickX / width)*duration;
}

// Event Listener
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar);
music.addEventListener('ended', nextSong);
