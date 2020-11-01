$( document ).ready(function() {
    console.log( 'script.js ready!' );
    console.log('version 6')

    const getUrlParameter = (sParam) => {
      let sPageURL = window.location.search.substring(1),////substring will take everything after the https link and split the #/&
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
    console.log(`accessToken ${accessToken}`);
    const buttonElement = document.querySelector("#search");
    const inputElement = document.querySelector("inputValue");
    
 buttonElement.onclick = function(event){
  event.preventDefault();
  const value = inputValue.value;
  const url = 'https://api.spotify.com/v1/search?q=';
  const newUrl = url + value + "&offset=5" + "&limit=10" + "&type=track";
     
      $.ajax ({
      url: newUrl,
      type: 'GET',
      headers: {
          'Authorization' : 'Bearer ' + accessToken
      },
      success: function(data) {
        console.log(' ');
        console.log(' ');
        console.log('Got data back');
        // Let's console what gets returned for our search
        console.log(JSON.stringify(data));
        // Example: Extract the id of the song from the data object
        let id = data.tracks.items[0].id;
        console.log(' ');
        console.log(`id ${id}`); ////id 1TEL6MlSSVLSdhOSddidlJ
    
        let iframe = `<iframe src=https://open.spotify.com/embed/track/${id} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        let parent_div = $('#music');
        parent_div.append("music");
      }
  });
}