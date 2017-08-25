![Build Status](https://travis-ci.org/amindia/invoice-number.svg?branch=master)

# invoice-number
Node.js module to generate invoice number sequentially 

## Installation

```sh
$ npm install invoice-number
```
## Usage

```javascript
var invNum = require('invoice-number')
var result = invNum.next('2017/08/ABC001')

console.log(result)

// => 2017/08/ABC002
```