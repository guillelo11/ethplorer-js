var rp = require('request-promise-native');

const API_URL = 'https://api.ethplorer.io';
const API_KEY = {apiKey: 'freekey'};

class Service {

    constructor(endpoint, path) {
        this.url = API_URL.concat(endpoint, path);
    }

    connect() {
        var options = { method: 'GET',
            url: this.url,
            qs: API_KEY,
            json: true
        };
        return rp(options);
    }
}

module.exports = Service;