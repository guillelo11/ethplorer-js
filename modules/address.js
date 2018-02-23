const Service = require('./service');

const ADDRESS_INFO = '/getAddressInfo/';
const ADDRESS_HISTORY = '/getAddressHistory/';
const ADDRESS_TRANSACTIONS = '/getAddressTransactions/';

class Address {

    constructor(address) {
        this.address = address;
    }

    getAddressInfo() {
        return new Service(ADDRESS_INFO, this.address).connect();
    }

    getAddressHistory() {
        return new Service(ADDRESS_HISTORY, this.address).connect();
    }

    getAddressTransactions() {
        return new Service(ADDRESS_TRANSACTIONS, this.address).connect();
    }
}

module.exports = Address;