let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let playButton = document.getElementById('play');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let currentAudio = null;

function playPauseMusic() {
    let currentItem = carousel.querySelector('.item:nth-child(2)');
    let audio = currentItem.querySelector('audio');

    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    if (audio.paused) {
        audio.play();
        playButton.classList.add('playing');
        playButton.innerHTML = '&#9616;&#9616;';
    } else {
        audio.pause();
        playButton.classList.remove('playing');
        playButton.innerHTML = '&#9835;';
    }

    currentAudio = audio;
}

playButton.onclick = playPauseMusic;

let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');

    if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    playButton.classList.remove('playing');
    playButton.innerHTML = '&#9835;';

    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}

nextButton.onclick = function () {
    showSlider('next');
};

prevButton.onclick = function () {
    showSlider('prev');
};









