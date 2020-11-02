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
    const buttonElement = document.querySelector("#search");
    const inputElement = document.querySelector("inputValue");
    
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
      success: function(data) {
        $("#music").empty();
        //console.log(' ');
        //console.log(' ');
        //console.log('Got data back');
        // Let's console what gets returned for our search
//         console.log(data);
        // Example: Extract the id of the song from the data object
        // let id = data.tracks.forEach(item);
        var results = data.tracks;
        $.each(results.items, function(index,item){
          $.get("<iframe src="https://open.spotify.com/embed/track/{{id}}" frameborder="0" allowtransparency="true" allow="encrypted-media",function(data){
            $("#music").append(tplawesome(data, [{"name":item, "id":item.id}]));
          });
        });
        

        // console.log(' ');
        // console.log(`id ${id}`); ////id 1TEL6MlSSVLSdhOSddidlJ
        // // Constructing a iframe to embed a song
        // let src_str = `https://open.spotify.com/embed/track/${item.id}`;
        // // console.log(`src_str ${src_str}`);
        // // let iframe = `<iframe src=${src_str} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        // let parent_div = $('#music');
        // parent_div.append(iframe);

      }
  });
}
});
