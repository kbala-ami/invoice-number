'use strict'

var tap = require('tap')
var invnum = require('../index')

tap.equal(
    invnum.next('Abc0~`!@#$%^&*()+={}[]|"\'<>?001'), 'ABC0002',
    'Next invoice number'
)

tap.equal(
    invnum.next('xjsiwe234njshd6'), 'XJSIWE234NJSHD7',
    'Next invoice number'
)

tap.equal(
    invnum.next('899ZZZ9'), '900AAA0',
    'Next invoice number'
)
