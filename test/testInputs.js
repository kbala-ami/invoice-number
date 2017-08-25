'use strict'

var tap = require('tap')
var invnum = require('../index')

tap.throws(
    function () {
      invnum.next()
    }, {}, { message: 'Missing required param: invoiceNumber' },
    'invoiceNumber cannot be empty'
)
