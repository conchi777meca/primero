const clientId = "da33e9c970654655a993fb65946d5f57"; // Replace with your client ID
const code = "43dac4fe2ea547b3a52154b6e98b6a40"; // Replace with your client secret

const accessToken = await getAccessToken(clientId, code);
const profile = await fetchProfile(accessToken);
populateUI(profile);


async function getAccessToken(clientId, code) {
  // TODO: Get access token for code
}


https://developer.spotify.com/documentation/web-api

https://developer.spotify.com/dashboard/da33e9c970654655a993fb65946d5f57



https://developer.spotify.com/documentation/web-api/howtos/web-app-profile





//     document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
// }

   // async function getAccessToken(clientId, code) {
  // TODO: Get access token for code

  (async() => {
  console.log('before start');
  await start();
  console.log('after start');
})();