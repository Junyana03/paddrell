const envelope = document.querySelector('.envelope-wrapper');
const hearts = document.querySelectorAll('.mini-heart');
let player;
let musicPlayed = false;

// YouTube API → Player Siap
function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player');
}

// Klik amplop
envelope.addEventListener('click', () => {

  // ✅ Play musik hanya pertama kali
  if (!musicPlayed && player) {
    player.playVideo();
    musicPlayed = true;
  }

  envelope.classList.toggle('flap');
  envelope.classList.remove('bounce');

  if (envelope.classList.contains('flap')) {
    hearts.forEach((heart, i) => {
      const delay = i * 0.2;
      heart.style.left = `${Math.random() * 80 - 40}px`;
      heart.style.top = `${Math.random() * 20 - 10}px`;
      heart.style.animation = `floatUp 1.8s ease-in-out ${delay}s forwards`;
    });
  } else {
    hearts.forEach((heart) => {
      heart.style.animation = "none";
      heart.style.opacity = 0;
    });
  }
});
