// src/components/GameLobby.js

import React, { useState, useEffect } from 'react';

const GameLobby = () => {
    const [gameSessions, setGameSessions] = useState([]);

    useEffect(() => {
        // Fetch game sessions from backend API
        fetch('/api/gamesessions/')
            .then(response => response.json())
            .then(data => setGameSessions(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Game Lobby</h1>
            <ul>
                {gameSessions.map(session => (
                    <li key={session.id}>{session.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default GameLobby;
