import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/players/')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error => {
        console.error('Error fetching players:', error);
      });
  }, []);

  return (
    <div>
      <h1>Players</h1>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
