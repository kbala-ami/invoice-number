'use strict'

function _next (cin) {
  var invNumber = cin.toUpperCase()
  var alphanumeric = new RegExp('^[a-zA-Z0-9\\_/:-;]*$')
  if (!invNumber && !invNumber.length) {
    throw new Error('Value is empty')
  } else if (!alphanumeric.test(invNumber)) {
    var index = invNumber.split(/[_/:\-;\\]+/)
    var length = index.length
    var invoice = index[length - 1]
    return alphaNumericIncrementer(invoice)
  } else {
    throw new Error('Value contains non-alphanumeric value')
  }
};

function alphaNumericIncrementer (invoice) {
  var invoiceNumber = invoice.toUpperCase()
    // var alphanumeric = new RegExp('^[a-zA-Z0-9]*$');
  var nonAlphaNumeric = new RegExp('^[~`!@#$%^&*()+={}[]|"\'<>?]*$')

  if (!invoiceNumber && !invoiceNumber.length) {
    throw new Error('Value is empty')
  } else {
    var index = invoiceNumber.length - 1
    for (; index >= 0;) {
      if (invoiceNumber.substr(index, 1) === '9') {
        invoiceNumber = invoiceNumber.substr(0, index) + '0' + invoiceNumber.substr(index + 1)
      } else if (invoiceNumber.substr(index, 1) === 'Z') {
        invoiceNumber = invoiceNumber.substr(0, index) + 'A' + invoiceNumber.substr(index + 1)
      } else if (!nonAlphaNumeric.test(invoiceNumber.substr(index, 1))) {
        var char = String.fromCharCode(invoiceNumber.charCodeAt(index) + 1)
        invoiceNumber = invoiceNumber.substr(0, index) + char + invoiceNumber.substr(index + 1)
        index = 0
      }

      index = index - 1
    }
  }
  return invoiceNumber
};

var api = {
  next: _next
}

module.exports = api
