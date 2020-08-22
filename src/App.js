import React, { useEffect, useState } from 'react';
import './App.css';

import Login from './components/js/Login';
import { getTokenFroUrl } from './helpers/spotify';

function App() {

  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFroUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, [])

  return (
    <div className="app">
      {token ? (
        <h1>I am logged in</h1>
      ) : (
          <Login />
        )}
    </div>
  );
}

export default App;
