// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveVideoTime = data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

const getSavedVideo = () => {
  const savedVideo = localStorage.getItem('videoplayer-current-time');
};

const resumeSavedVideo = () => {
  const lastPlayedTime = getSavedVideo();
  player.setCurrentTime(lastPlayedTime);
};

resumeSavedVideo();

player.on('timeupdate', throttle(saveVideoTime, 1000));
