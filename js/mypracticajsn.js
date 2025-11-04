const clientId = "da33e9c970654655a993fb65946d5f57"; // Replace with your client ID
const code = "43dac4fe2ea547b3a52154b6e98b6a40"; // Replace with your client secret
// http GET https://api.spotify.com/v1/me \
//   Authorization:'Bearer 1POdFZRZbvb...qqillRxMr2z'

async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
    },
  });

  return await response.json();
}

async function getTrackInfo(access_token) {
  const response = await fetch("https://api.spotify.com/v1/tracks/4cOdK2wGLETKBW3PvgPWqT", {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + access_token },
  });

  return await response.json();
}

async function getProfile(accessToken) {
  let accessToken = localStorage.getItem('access_token');

  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  });

  const data = await response.json();
}

// {
//   "country": "ES",
//   "display_name": "Cmc",
//   "email": "cuentaoutlook@gmail.com",
//   "explicit_content": {
//     "filter_enabled": false,
//     "filter_locked": false
//   },
//   "external_urls": {
//     "spotify": "https://open.spotify.com/user/31hrfao4txu63ruhqhfwqdlw4l3q"
//   },
//   "followers": {
//     "href": null,
//     "total": 0
//   },
//   "href": "https://api.spotify.com/v1/users/31hrfao4txu63ruhqhfwqdlw4l3q",
//   "id": "31hrfao4txu63ruhqhfwqdlw4l3q",
//   "images": [],
//   "product": "free",
//   "type": "user",
//   "uri": "spotify:user:31hrfao4txu63ruhqhfwqdlw4l3q"
// }

getToken().then(response => {
  getTrackInfo(response.access_token).then(profile => {
    console.log(profile)
  })
});