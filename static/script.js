document.addEventListener('DOMContentLoaded', function() {
    // Fetch player data from the backend
    fetch('http://localhost:8000/players/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Update the DOM with the fetched player data
            const playersList = document.getElementById('players-list');
            data.players.forEach(player => {
                const playerItem = document.createElement('li');
                playerItem.className = 'player-item';
                playerItem.innerHTML = `<span>${player.username}</span> - <span>${player.avatar}</span>`;
                playersList.appendChild(playerItem);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
