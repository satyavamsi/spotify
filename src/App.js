import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';

import { getTokenFroUrl } from './helpers/spotify';
import Login from './components/js/Login';
import Player from './components/js/Player';
import { useDataLayerValue } from './helpers/DataLayer';
import { actionTypes } from './helpers/reducer';

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFroUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {

      dispatch({
        type: actionTypes.SET_TOKEN,
        token: _token
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: actionTypes.SET_PLAYLISTS,
          playlists: playlists
        })
      })
    }
  }, [])

  console.log(user);

  return (
    <div className="app">
      {token ? (
        <Player spotify={spotify} />
      ) : (
          <Login />
        )}
    </div>
  );
}

export default App;
