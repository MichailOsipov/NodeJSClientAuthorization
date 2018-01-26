const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

export const register = ({login, password}) => fetch('api/register', {
    headers,
    method: 'POST',
    body: JSON.stringify({login, password})
}).then(response => response.json());
