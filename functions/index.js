const functions = require('firebase-functions');
const rp = require('request-promise');
const cors = require('cors')({origin: true});

exports.medium = functions.https.onRequest((request, response) => {
    cors(request, response, () => {});
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
