var OSTSDK = require('@ostdotcom/ost-sdk-js');

apiEndpoint = 'https://sandboxapi.ost.com/v1.1';
api_key = 'e1050c4adb8ebb715c78'; // replace with the API Key you obtained earlier
api_secret = 'c9bd3e361e52bc2ae042968fe8b44e9d0f59c35986764b4b4f2918689c55e0b0'; // replace with the API Secret you obtained earlier
const ostObj = new OSTSDK({
    apiKey: api_key,
    apiSecret: api_secret,
    apiEndpoint: apiEndpoint
});


module.exports = ostObj;