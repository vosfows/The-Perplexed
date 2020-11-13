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
  const buttonElement = document.querySelector('#search-button');
  const inputElement = document.querySelector('#inputValue');




  buttonElement.onclick = function(event) {
  event.preventDefault();
  const value = inputElement.value;
  const url = 'https://api.spotify.com/v1/search?q=';
  const newUrl = url + value +'&type=track' + '&limit=10&offset=5';

  var myOptions = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer' + accessToken
    }
  };
  

  fetch(url,myOptions)
  .then((res) => res.json())
  .then((data) => {
  console.log('Data', data);
  })
  .catch((error) => {
  console.log('Error', error);
  });
  }
