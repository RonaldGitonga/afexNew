const APP_ENVIRONMENT = 'live'; // sandbox or live

let apiUrl, consumerKey, consumerSecret;

if (APP_ENVIRONMENT === 'sandbox') {
    apiUrl = 'https://cybqa.pesapal.com/pesapalv3/api/Auth/RequestToken'; // Sandbox URL
    consumerKey = '';
    consumerSecret = '';
} else if (APP_ENVIRONMENT === 'live') {
    apiUrl = 'https://pay.pesapal.com/v3/api/Auth/RequestToken'; // Live URL
    consumerKey = '';
    consumerSecret = '';
} else {
    console.error('Invalid APP_ENVIRONMENT');
    process.exit(1);
}

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

const data = {
    consumer_key: consumerKey,
    consumer_secret: consumerSecret,
};

fetch(apiUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
})
    .then(response => response.json())
    .then(data => {
        const token = data.token;
        console.log('Token:', token);
    })
    .catch(error => {
        console.error('Error:', error);
    });
