import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import './App.css';

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {

    async function getToken() {
      const response = await fetch('https://jammmingapi.onrender.com/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();

  }, []);


  return (
    <>
        { (token === '') ? <Login/> : <Dashboard token={token} /> }
    </>
  );
}


export default App;
