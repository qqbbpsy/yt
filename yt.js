var videoContainers = document.querySelectorAll('.video-container');

videoContainers.forEach(function(container) {
  var thumbnail = container.querySelector('.video-thumbnail');
  var videoWrapper = container.querySelector('.video-wrapper');
  var videoId = thumbnail.dataset.videoId;
  var player;
  var playButton = container.querySelector('.play-button');
  var watchNowText = container.querySelector('.watch-now');

  thumbnail.addEventListener('click', playVideo);
  playButton.addEventListener('click', playVideo);
  watchNowText.addEventListener('click', playVideo);

  function playVideo(event) {
    event.stopPropagation();

    playButton.style.display = 'none';
    thumbnail.style.display = 'none';
    watchNowText.style.display = 'none';
    videoWrapper.style.display = 'block';

    player = new YT.Player('player', {
      videoId: videoId,
      events: {
        'onReady': onPlayerReady,
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }
});