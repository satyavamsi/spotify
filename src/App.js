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

  const [token, setToken] = useState(null);

  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFroUrl();
    // window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: actionTypes.SET_USER,
        user: hash
      })
      setToken(_token);
      spotify.setAccessToken(_token);
    }
  }, [])

  return (
    <div className="app">
      {token ? (
        <Player />
      ) : (
          <Login />
        )}
    </div>
  );
}

export default App;
