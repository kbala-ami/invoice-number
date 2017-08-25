'use strict'

var tap = require('tap')
var invnum = require('../index')
    // ~`!@#$%^&*()+={}[]|"\'<>?
tap.equal(
    invnum.next('Abc0~`!@#$%^&*()+={}[]|"\'<>?001'), 'ABC0002',
    'Next invoice number'
)
