'use strict'

var tap = require('tap')
var invnum = require('../index')

tap.throws(
    function () {
      invnum.next()
    }, {}, { message: 'Missing required param: invoiceNumber' },
    'invoiceNumber cannot be empty'
)

tap.throws(
    function () {
      invnum.next('ABC/2017/')
    }, {}, { message: 'invoiceNumber cannot end with illegal character' },
    'str cannot be empty'
)
