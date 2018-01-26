export const oauthLogin = () => fetch('api/oauth/login', {
    method: 'GET'
}).then(response => response.json());
