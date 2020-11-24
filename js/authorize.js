var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = '779ee1b8200d4c4e900ece34dfaa8254';
const redirectUri= 'https://vosfows.github.io/spotify/music.html';

let query = 'client_id=' + clientId + '&redirect_uri=' + redirectUri + '&response_type=token&show_dialogue=true';
window.location = authEndpoint + '?' + query;
})
