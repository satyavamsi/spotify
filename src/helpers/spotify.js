export const authEndPoint = 'https://accounts.spotify.com/authorize';

const redirectUri = "http://localhost:3000/";

const clientId = "YOUR_SPOTIFY_DEVELOPER_CLIENT_ID";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20")}&response_type=token&show_dialog=true`;