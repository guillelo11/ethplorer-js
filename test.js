import test from 'ava';
const Address = require('./modules/address');
const Token = require('./modules/token');

const testAddress = new Address('0x0de0bcb0703ff8f1aeb8c892edbe692683bd8030');
const token = new Token('0xba51ff3802aa3170ce7ac7ac001831ca3eb6eeea');

test('getAddressInfo', t => {
    return testAddress.getAddressInfo().then(result => {
        t.is(result.address, '0x0de0bcb0703ff8f1aeb8c892edbe692683bd8030');
    });
});

test('getAddressHistory', t => {
    return testAddress.getAddressHistory().then(result => {
        t.false(isEmpty(result));
    });
});

test('getAddressTransactions', t => {
    return testAddress.getAddressTransactions().then(result => {
        t.false(isEmpty(result));
    });
});

test('getTokenInfo', t => {
    return token.getTokenInfo().then(result => {
        t.is(result.address, '0xba51ff3802aa3170ce7ac7ac001831ca3eb6eeea');
    });
});

test('getTokenHistory', t => {
    return token.getTokenHistory().then(result => {
        t.false(isEmpty(result));
    });
});

test('getTopTokens', t => {
    return Token.getTopTokens().then(result => {
        t.false(isEmpty(result));
    });
});

function isEmpty(obj){
    return (Object.getOwnPropertyNames(obj).length === 0);
}