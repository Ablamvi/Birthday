
const music = document.getElementById('background-music');
const btn = document.getElementById('music-control');

btn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        btn.textContent = 'Pause';
    } else {
        music.pause();
        btn.textContent = 'Play';
    }
});
