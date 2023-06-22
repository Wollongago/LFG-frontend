// fetch steam game data of supported games
export const fetchGameData = (games) => {
    return fetch('/api/games', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ games }),
    })
        .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch game data');
        }
        return response.json();
        })
        .catch((error) => {
        console.error(error);
        throw new Error('Failed to fetch game data');
        });
    }