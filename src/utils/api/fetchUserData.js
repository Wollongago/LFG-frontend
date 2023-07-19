export const fetchUserData = (token) => {
    // *** CHANGE ENDPOINT ***
    return fetch('/api/user', {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        return response.json();
        })
        .catch((error) => {
        console.error(error);
        throw new Error('Failed to fetch user data');
        });
    }; 