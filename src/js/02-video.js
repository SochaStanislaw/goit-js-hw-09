import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function saveVideoTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

function getSavedVideo() {
  const savedVideo = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(savedVideo ? parseFloat(savedVideo) : 0);
}

getSavedVideo();
player.on('timeupdate', throttle(saveVideoTime, 1000));
