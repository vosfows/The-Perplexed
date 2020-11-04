function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

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
    const buttonElement = document.querySelector("#search-button");
    const inputElement = document.querySelector("inputValue");
    var music = ``
    
   
 buttonElement.onclick = function(event){
  event.preventDefault();
  const value = inputValue.value;
  const url = 'https://api.spotify.com/v1/search?q=';
  const newUrl = url + value +'&type=track' + '&limit=10&offset=5';
     

      $.ajax ({
      url: newUrl,
      type: 'GET',
      headers: {
          'Authorization' : 'Bearer ' + accessToken
      },
      success: function(response) {
        $("#music").empty();

        var results = response.tracks;
        results.items.forEach(item => {
          music = `

          <iframe class="music" width="300" height="350" src="https://open.spotify.com/embed/track/${item.id}" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          `

          let parent_div = $("#music")
          parent_div.append(music)
        })


      }
  });
}
});
