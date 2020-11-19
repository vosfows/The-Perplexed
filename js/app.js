
var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
const getUrlParameter = (sParam) => {
      let sPageURL = window.location.search.substring(1),
          sURLVariables = sPageURL.split('#'),
          sParameterName,
          i;
      let split_str = window.location.href.split('#');
      sURLVariables = split_str[1].split('&');
      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
  };

  const accessToken = getUrlParameter('access_token');
  const buttonElement = document.querySelector('#search-button');
  const inputElement = document.querySelector('#inputValue');
  const musicRow = document.querySelector('#music');

  buttonElement.onclick = function(event) {
  event.preventDefault();
  const value = inputElement.value;
  const url = 'https://api.spotify.com/v1/search?q=';
  const newUrl = url + value +'&type=track' + '&limit=10&offset=5';

  var myOptions = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    },
    mode: 'cors',
    cache: 'default'
  };

  fetch(newUrl,myOptions)
  .then((res) => res.json())
  .then((data) => {
    
    appendTheMusic(data);
    console.log(data);
  })
  .catch((error) => {
  console.log('Error', error);
  });

  }
});


 function appendTheMusic(data){
  var id = ""; 
  var tracks = data.tracks; 
  document.getElementById("music").innerHTML = null; 
  tracks.items.forEach(item => {
    
    var makeIframe = document.createElement("iframe");
    makeIframe.setAttribute('width', '300');
    makeIframe.setAttribute('height', '350');
    makeIframe.setAttribute('frameborder', '0');
    makeIframe.setAttribute('transparency', 'true');
    makeIframe.setAttribute('allow', 'encrypted-media');
    makeIframe.setAttribute('src',"https://open.spotify.com/embed/track/"+item.id );
    document.getElementById("music").append(makeIframe);
    console.log(item.id);
  });


}

