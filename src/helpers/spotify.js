// authorisation end point
export const authEndPoint = 'https://accounts.spotify.com/authorize';

// redirect uri after authorisation
const redirectUri = "http://localhost:3000/";

// developer client_id
const clientId = "YOUR_SPOTIFY_DEVELOPER_CLIENT_ID";

// user permissions for the token
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

// get token from url after authorisation and redirect
export const getTokenFroUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {})
}

// final login url with client_id,, redirect_uri and scopes
export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20")}&response_type=token&show_dialog=true`;