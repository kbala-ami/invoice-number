'use strict'

var tap = require('tap')
var invnum = require('../index')

tap.equal(
  invnum.next("abc0001").length, "ABC0002",
  'Next invoice number'
)
