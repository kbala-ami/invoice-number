'use strict'

function _next (invoiceNumber) {
  if (!invoiceNumber) throw new Error('invoiceNumber cannot be empty')
  var array = invoiceNumber.split(/[_/:\-;\\]+/)
  var lastSegment = array.pop()
  var priorSegment = invoiceNumber.substr(0, invoiceNumber.indexOf(lastSegment))
  var nextNumber = alphaNumericIncrementer(lastSegment)
  return priorSegment + nextNumber
}

function alphaNumericIncrementer (str) {
  if (str && str.length > 0) {
    var invNum = str.replace(/([^a-z0-9]+)/gi, '')
    invNum = invNum.toUpperCase()
    var index = invNum.length - 1
    while (index >= 0) {
      if (invNum.substr(index, 1) === '9') {
        invNum = invNum.substr(0, index) + '0' + invNum.substr(index + 1)
      } else if (invNum.substr(index, 1) === 'Z') {
        invNum = invNum.substr(0, index) + 'A' + invNum.substr(index + 1)
      } else {
        var char = String.fromCharCode(invNum.charCodeAt(index) + 1)
        invNum = invNum.substr(0, index) + char + invNum.substr(index + 1)
        index = 0
      }
      index--
    }
    return invNum
  } else {
    throw new Error('str cannot be empty')
  }
}

var api = {
  next: _next
}

module.exports = api
