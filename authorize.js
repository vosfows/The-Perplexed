$( document ).ready(function() {
  const authEndpoint = 'https://accounts.spotify.com/authorize';
  const clientId = 'f7e5ca5e70fa47319f2d2bf11f31cb25';
  const redirectUri = `${window.location.protocol}//${window.location.host}/`;
  let query = `client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
  window.location = `${authEndpoint}?${query}`;
});
