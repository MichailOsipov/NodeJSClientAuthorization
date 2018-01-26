const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

const user = {
    username: 'Michail',
    password: '123456'
};

const client = {
    client_id: 'some unique id',
    client_secret: 'some secret'
};

export const passportjsLogin = ({login, password}) => fetch('api/passportjs/login', {
    headers,
    method: 'POST',
    body: JSON.stringify({login, password})
}).then(response => response.json());

export const createUser = () => fetch('api/user', {
    headers,
    method: 'POST',
    body: JSON.stringify(user)
}).then(response => response.json()).then((data) => {
    console.log(data);
});

export const createClient = () => fetch('api/client', {
    headers,
    method: 'POST',
    body: JSON.stringify({
        name: 'ClientTv',
        ...client
    })
}).then(response => response.json()).then((data) => {
    console.log(data);
});

export const getTokens = () => fetch('api/oauth/token', {
    headers,
    method: 'POST',
    body: JSON.stringify({
        grant_type: 'password',
        ...client,
        ...user
    })
})
    .then((response) => {
        console.log('!');
        return response.json();
    })
    .then(({access_token: accessToken}) => fetch('api/userInfo', {
        headers: {
            ...headers,
            Authorization: `Bearer ${accessToken}`
        },
        method: 'GET'
    }))
    .then(response => response.json())
    .then((data) => {
        console.log(data);
    });
