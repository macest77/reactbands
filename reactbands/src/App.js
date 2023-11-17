import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [bands, getBands] = useState([]);

  const fetchBands = () => {
    fetch('https://laravel.macest.slaskdatacenter.pl/api/getbands')
    .then(result => result.json())
    .then(data => getBands(data))
    .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchBands();
  });

  return (
    <div className="App">
      
      <main>
        { bands.map((n,i) => (
          <p key={i}>{ n.band_name }</p>
        ))}
      </main>
    </div>
  );
}

export default App;
