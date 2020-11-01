$( document ).ready(function() {
  const authEndpoint = 'https://accounts.spotify.com/authorize';
  let clientId = '779ee1b8200d4c4e900ece34dfaa8254';
  // Use the following site to convert your regular url to the encoded version: 
  // https://www.url-encode-decode.com/
  const redirectUri= 'https://vosfows.github.io/spotify';
  let query = `client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
  window.location = `${authEndpoint}?${query}`;
});
