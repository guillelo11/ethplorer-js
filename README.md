# ethplorer-js
Simple ethplorer.io API for Node

## Features
* Address
    * Get Address Info: getAddressInfo()
    * Get Address History (last 10 operations): getAddressHistory()
    * Get Address Transactions (last 10 transactions): getAddressTransactions()

* Tokens
    * Get Token Info: getTokenInfo()
    * Get Token History (last 10 operations): getTokenHistory()
    * Get Top Tokens (Shows top 50 of the most active tokens for the last 30 days period): getTopTokens() Static method

## Example usage:
### Address
``` javascript
const Address = require('ethplorer-js').Address;

const myAddress = new Address('0x0de0bcb0703ff8f1aeb8c892edbe692683bd8030');

myAddress.getAddressInfo().then(result =>{
    //do whatever
});
```

### Token
``` javascript
const Token = require('ethplorer-js').Token;

const myToken = new Token('0xba51ff3802aa3170ce7ac7ac001831ca3eb6eeea');

myToken.getTokenInfo().then(result =>{
    //do whatever
});
```