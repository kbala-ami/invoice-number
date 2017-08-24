'use strict'

var tap = require('tap')
var invnum = require('../index')

tap.throws(
  function () {
    invnum.next()
  }, {},
  { message: 'Missing required param: cin' },
  'Throws if current invoice number is empty'
)

tap.throws(
  function () {
    invnum.next('ab36/?S')
  },
  { message: 'cin is not a alphanumeric' },
  'Should require pincodeLength to be a whole number'
)