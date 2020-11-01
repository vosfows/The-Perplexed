var tools = require('spotify-web-api.js');

var request = require('request'); // "Request" library
var http = require("http");
var Spotify = require('spotify-web-api.js');
var s = new Spotify();


const buttonElement = document.querySelector("#search");
const inputElement = document.querySelector("inputValue");

var client_id = '9ff915fc57e646e9af5e89bb9d6df6c7'; // Your client id
var client_secret = '80aed081f2194d25bcb07a2f1264432a'; // Your secret
var search = 'asdf';
var spotify_playlist = 'https://api.spotify.com/v1/playlists/' + search + '/tracks';

// your application requests authorization

var console_content = '';



var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/users/jmperezperez',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      console.log(body);
    });
  }

  
spotifyApi.setAccessToken(token);
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
  if (err) console.error(err);
  else console.log('Artist albums', data);
});


http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.write(console_content);
    response.end();
  }).listen(8888);
