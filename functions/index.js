const functions = require('firebase-functions');
var rp = require('request-promise');

exports.medium = functions.https.onRequest((request, response) => {
    const username = 'YOUR_MEDIUM_USERNAME';
    const url = 'https://medium.com/@"+username+"/latest?format=json';
    
    return rp(url)
        .then((htmlString) => {
            response.send(JSON.parse(htmlString.replace('])}while(1);</x>', '')));
        })
        .catch((err) => {
            console.log(err);
            response.send({});
        });
});
