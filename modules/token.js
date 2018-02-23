const Service = require('./service');

const TOKEN_INFO = '/getTokenInfo/';
const TOKEN_HISTORY = '/getTokenHistory/';
const TOP_TOKENS = '/getTopTokens';

class Token {

    constructor(contract) {
        this.contract = contract;
    }

    getTokenInfo() {
        return new Service(TOKEN_INFO, this.contract).connect();
    }

    getTokenHistory() {
        return new Service(TOKEN_HISTORY, this.contract).connect();
    }

    static getTopTokens() {
        return new Service(TOP_TOKENS, '').connect();
    }
}

module.exports = Token;